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

  var timesel = moment(req.body.time, ["h:mm A"]).format("HH:mm");
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
      res.status(500).send({
        message: "User Already Exists",
      });
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
              var totalInMinutes =
                parseInt(time.split(":")[0]) * 60 +
                parseInt(time.split(":")[1]);
              var otherMinutes = 120;
              var grandTotal = otherMinutes + totalInMinutes;
              var bookH = Math.floor(grandTotal / 60);
              var bookM = grandTotal % 60;
              var bookingDurationToHour = bookH + ":" + bookM;

              TableAllotment.addBookingHours(
                windowsSet,
                bookingDurationToHour,
                timesel,
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