import express from "express";
import { addpayment } from "../../controllers/payment-history/add-payment-history.controller";
import { verifyToken } from "../../middlewares/jwtTokenverify/jwtToken.middleware";

const router = express.Router();

router.post("/addpayment",verifyToken, addpayment)

export default router;
