import Users from "../models/user.model.js";
import TableAllotment from "../models/table.model.js";
import moment from "moment/moment.js";
// Create and Save a new Reservation
export function createReservationProcess(req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
 
  var timesel = moment(req.body.time, ["h:mm A"]).format("HH:MM A");
  var dataSelected = null;

  const user = new Users({
    phone: req.body.phone,
    name: req.body.name,
  });

  Users.searchExistingUser(user, (err, userExisting) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the reservation.",
      });

    if (userExisting === true) {
      Users.deleteUser(user, (err, data) => {
        console.log(data);
        res.status(200).send({
          ReservationData: data,
        });
      })

    }

    if (userExisting === false) {
      // Creating User In database
      Users.createUser(user, (err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while creating the reservation.",
          });
        }

        TableAllotment.reserveTable(data, (err, tableAllotement) => {
          if (err) {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while creating the reservation.",
            });
          }

          TableAllotment.reserveTimeWindow(
            tableAllotement,
            req.body,
            (err, windowsSet) => {
              if (err) {
                res.status(500).send({
                  message:
                    err.message ||
                    "Some error occurred while creating the reservation.",
                });
              }
              var time = timesel;
              console.log(timesel);
      

              function addTimeToString(timeString, addHours, addMinutes) {
                // The third argument is optional.
                if (addMinutes === undefined) {
                  addMinutes = 0;
                }
                // Parse the time string. Extract hours, minutes, and am/pm.
                var match = /(\d+):(\d+)\s+(\w+)/.exec(timeString),
                  hours = parseInt(match[1], 10) % 12,
                  minutes = parseInt(match[2], 10),
                  modifier = match[3].toLowerCase();
                // Convert the given time into minutes. Add the desired amount.
                if (modifier[0] == "p") {
                  hours += 12;
                }
                var newMinutes = (hours + addHours) * 60 + minutes + addMinutes,
                  newHours = Math.floor(newMinutes / 60) % 24;
                // Now figure out the components of the new date string.
                newMinutes %= 60;
                var newModifier = newHours < 12 ? "am" : "pm",
                  hours12 = newHours < 12 ? newHours : newHours % 12;
                if (hours12 == 0) {
                  hours12 = 12;
                }
                // Glue it all together.
                var minuteString = (newMinutes >= 10 ? "" : "0") + newMinutes;
                return hours12 + ":" + minuteString + " " + newModifier;
              }

              var bookingDurationToHour = addTimeToString(timesel, 2, 0);

              console.log(bookingDurationToHour);
              TableAllotment.addBookingHours(
                windowsSet,
                bookingDurationToHour,
                req.body.time,
                req.body.date,
                (err, timewindows) => {
                  if (err) {
                    res.status(500).send({
                      message:
                        err.message ||
                        "Some error occurred while creating the reservation.",
                    });
                  }

                  TableAllotment.searchTimeWindows(
                    tableAllotement.id,
                    (err, results, fields) => {
                      if (err) {
                        res.status(500).send({
                          message:
                            err.message ||
                            "Some error occurred while creating the reservation.",
                        });
                      }

                      Users.searchUserByPhone(user, (err, fields, user) => {
                        if (err) {
                          res.status(500).send({
                            message:
                              err.message ||
                              "Some error occurred while creating the reservation.",
                          });
                        }
                        console.log("searchExistingUser", user, fields);
                        TableAllotment.createReservation(
                          req.body,
                          results,
                          (err, results, fields) => {
                            if (err) {
                              res.status(500).send({
                                message:
                                  err.message ||
                                  "Some error occurred while creating the reservation.",
                              });
                            }
                            console.log(results, fields);

                            res.status(200).send({
                              message: "Reservation Done",
                              ReservationData: results,
                            });
                          }
                        );
                      });
                    }
                  );
                }
              );
            }
          );
        });
      });
    }
  });
}
export function updatedReservation(req, res) {}
export function freeTableReservation(req, res) {}
//98798798789831