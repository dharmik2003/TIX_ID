import express from "express";
import { addSeats } from "../../controllers/seats/add-seats.controller";

const router = express.Router();

router.post("/addseats", addSeats);

export default router;
