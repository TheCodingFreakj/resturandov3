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
    connection.query("INSERT INTO reservations SET ?", newReservation, (err, res) => {
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