import express from "express";
import { addRazorpayPayment } from "../../controllers/razorpay-payment/razorpaypayment.controller";
import { verifyToken } from "../../middlewares/jwtTokenverify/jwtToken.middleware";

const router = express.Router();

router.post("/payment",verifyToken, addRazorpayPayment)

export default router;
