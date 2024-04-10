import express from "express";
import { addScreen } from "../../controllers/screens/add-screen.controller";
import { addSeatLabel } from "../../controllers/seat-label/add-seat-label.controller";
import { verifyToken } from "../../middlewares/jwtTokenverify/jwtToken.middleware";

const router = express.Router();

router.get("/get", addSeatLabel);

export default router;
