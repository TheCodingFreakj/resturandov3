import connection from "./db.js";
import Users from "./user.model.js";
import { v4 as uuidv4 } from "uuid";

// constructor

class TableAllotment {
    constructor(tableAllotment) {
        this.table_id = tableAllotment.id;
        this.userid = tableAllotment.user_id;
        this.isBooked = tableAllotment.isBooked;
    }
    static reserveTable(userDetails, result) {
        Users.searchUserByPhone(userDetails, (err, userExistingId) => {
            var tableAddeForBooking = `INSERT INTO tables (table_id, fkuser_id, isBooked) VALUES(?,?,?)`;
            let vBooked = true;
            connection.query(
                tableAddeForBooking,
                [userExistingId, userExistingId, vBooked],
                (err) => {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                    }

                    result(null, userDetails);
                }
            );
        });
    }

    static reserveTimeWindow(tableDetails, alldata, result) {
        console.log("alldata", tableDetails);
        // var timewindowadd =
        //   `INSERT INTO time-windows (fk_table_id, starttime, endtime) VALUES(?,?,?)`;
        var tableBooked = "SELECT table_id FROM tables WHERE fkuser_id = ?";

        connection.query(tableBooked, [tableDetails.id], (err, results) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            result(null, results[0].table_id);
        });
    }

    static addBookingHours(tableId, bookingDurationToHour, timesel, result) {
        var tableaHoursForBooking = `INSERT INTO timewindows (fk_table_id, starttime, endtime) VALUES(?,?,?)`;
        let startTime = timesel;
        let endTime = bookingDurationToHour;
        connection.query(
            tableaHoursForBooking,
            [tableId, startTime, endTime],
            (err, results, fields) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }

                let dataToSend = {
                    tableId,
                    bookingDurationToHour,
                    timesel,
                };

                result(null, dataToSend);
            }
        );
    }

    static searchTimeWindows(tableId, result) {
        var tableIdRetrival = "SELECT * FROM timewindows WHERE fk_table_id = ?";

        connection.query(tableIdRetrival, [tableId], (err, results, fields) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            result(null, results);
        });
    }
    //   results { tableId: 34, bookingDurationToHour: '17:30', timesel: '15:30' }
    static createReservation(allData, dataSelected, result) {
        var newReservation = `INSERT INTO reservations (reservations_id, fk_time_window_id, fk_user_id, name, email, date, phone, guests, time, bookingDurationToHour,tableId) VALUES(?,?,?,?,?,?,?,?,?,?,?)`;
        let duration_hours = dataSelected[0].time_window_id;
        let userId = dataSelected[0].time_window_id;

        let timeseleded = dataSelected[0].starttime;
        let bookingTime = dataSelected[0].endtime;
        let tableId = dataSelected[0].fk_table_id;

        let name = allData.name;
        let email = allData.email;
        let date = new Date(allData.date);
        let phone = allData.phone;
        let guests = allData.guests;

        connection.query(
            newReservation,
            [
                userId,
                duration_hours,
                userId,
                name,
                email,
                date,
                phone,
                guests,
                timeseleded,
                bookingTime,
                tableId,
            ],
            (err, results) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }
                console.log(results);
                result(null, results);
            }
        );
    }
}
export default TableAllotment;

//script to trucncate forign table table
// SET foreign_key_checks = 0;

// drop table `reservations`;

// SET foreign_key_checks = 1;

//Create table
// CREATE TABLE student (
//     id INT PRIMARY KEY,
//     first_name VARCHAR(100) NOT NULL,
//     last_name VARCHAR(100) NOT NULL,
//     city_id INT,
//           CONSTRAINT fk_student_city_id
//           FOREIGN KEY (city_id) REFERENCES city(id)
//     );
