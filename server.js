import express, { json, urlencoded } from "express";
import cors from "cors";
import path from "path";
import connection from "./app/models/db.js";

import cron from "node-cron";
import * as dotenv from "dotenv";
dotenv.config();

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// create a Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
import twilio from "twilio";
import ReservationRouter from "./app/routes/reservations.route.js";
export const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

cron.schedule("* * * * *", () => {
  var allUsers = "SELECT * FROM user";

  connection.query(allUsers, (err, user) => {
    if (err) {
      return;
    }

    user.forEach((userDetails) => {
      var reservationToDelete =
        "SELECT tableId , fk_user_id, date FROM reservations WHERE phone = ?";
      connection.query(
        reservationToDelete,
        [userDetails.phone],
        (err, usersTables) => {
          if (err) {
            result(err, null);
            return;
          }

          var isbookTimeExceeds =
            "SELECT endTime FROM timewindows WHERE fk_table_id = ?";
          connection.query(
            isbookTimeExceeds,
            [usersTables[0].tableId],
            (err, results) => {
              if (err) {
                return;
              }

              var today = new Date();

              if (new Date(usersTables[0].date) < today) {
                if (new Date(usersTables[0].date).getTime() < today.getTime()) {
                  user.forEach((userDet) => {
                    if (userDet.fk_user_id === usersTables[0].user_id) {
                      const client = twilio(accountSid, authToken);
                      client.messages
                        .create({
                          from: process.env.TWILIO_NUMBER,
                          to: userDet.phone,
                          body: "Your Booking Has Expired! Book Again",
                        })
                        .then((message) => console.log(message.sid));

                      setTimeout(() => {
                        var deleteReser = `DELETE w,t,tw,ur FROM  reservations w
                          INNER JOIN user ur ON ur.user_id=w.fk_user_id
                        INNER JOIN tables t ON t.table_id =w.tableId
                        INNER JOIN timewindows tw ON tw.fk_table_id=t.table_id
                        WHERE  ur.user_id=${usersTables[0].fk_user_id}`;

                        connection.query(deleteReser, (err, rows) => {
                          if (err) throw err;

                          console.log("Cleared users Table", rows);
                        });
                      }, 10000);
                    }
                  });
                }
              }
            }
          );
        }
      );
    });
  });
});

app.use("/api/reservations", ReservationRouter);

app.use(express.static(path.resolve(__dirname, "public")));
app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "public/index.html"));
});
// set port, listen for requests
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
