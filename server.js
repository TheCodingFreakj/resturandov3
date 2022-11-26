import express, { json, urlencoded } from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import ReservationRouter from "./app/routes/reservations.route.js"
export const app = express();

// var corsOptions = {
//   origin: "http://127.0.0.1:5500",
// };

var corsOptions = {
  origin: "*",
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

app.use("/api/reservations", ReservationRouter);


app.use(express.static(path.resolve(__dirname, "public")));
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/index.html'));
});
// set port, listen for requests
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  
  console.log(`Server is running on port ${PORT}.`);
});
