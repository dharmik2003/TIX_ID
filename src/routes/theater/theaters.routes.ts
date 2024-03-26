import express from "express";
import { addTheater } from "../../controllers/theaters/add-theater.controller";

const router = express.Router();

router.post("/addtheater", addTheater);

export default router;
