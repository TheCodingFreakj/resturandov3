import { createReservationProcess } from "../controllers/reservation.controller.js";
import express from "express";
var router = express.Router();

// Create a new Tutorial
router.post("/", createReservationProcess);

export default router;
