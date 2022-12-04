import connection from "./db.js";

// constructor

class Reservations {
  constructor(reservation) {
    this.name = reservation.name;
    this.email = reservation.email;
    this.date = reservation.date;
    this.phone = reservation.phone;
    this.guests = reservation.guests;
    this.time = reservation.time;
  }

  static create(newReservation, result) {
    console.log(newReservation);
    var sql = "INSERT INTO reservations (name, email, date, phone, guests, time) VALUES ?";
    var values = [
      [
        newReservation.name,
        newReservation.email,
        newReservation.date,
        newReservation.phone,
        newReservation.guests,
        newReservation.time,
      ],
    ];
    connection.query(sql,[values], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created newReservation: ", {
        id: res.insertId,
        ...newReservation,
      });
      result(null, { id: res.insertId, ...newReservation });
    });
   
  }
}
export default Reservations;
