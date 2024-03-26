import express from "express";
import { addScreen } from "../../controllers/screens/add-screen.controller";
import { addSeatLabel } from "../../controllers/seat-label/add-seat-label.controller";

const router = express.Router();

router.get("/addseatlabel", addSeatLabel);

export default router;
