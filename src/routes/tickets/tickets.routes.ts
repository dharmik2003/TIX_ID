import express from "express";
import { verifyToken } from "../../middlewares/jwtTokenverify/jwtToken.middleware";
import { getticketsController } from "../../controllers/tickets/get-tickets.controller";

const router = express.Router();

router.post("/get",verifyToken, getticketsController);

export default router;
