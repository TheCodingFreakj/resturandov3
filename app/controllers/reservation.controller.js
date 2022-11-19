import  Reservation  from "../models/reservation.model.js";

// Create and Save a new Tutorial
export function create(req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Tutorial
  const reservation = new Reservation({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    phone: req.body.phone,
    guests: req.body.guests,
    time: req.body.time,
  });

  // Save Tutorial in the database
  Reservation.create(reservation, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the reservation.",
      });
    else res.send(data);
  });
}
