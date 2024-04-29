import express, { Request, Response } from "express";
import { addMyShowService } from "../../services/myshow/add-myshow.service";
import { paymentHistoryService } from "../../services/payment-history/payment-history.service";
import { addrazorpayPaymentLink } from "../../services/razorpay-payment/razorpaypayment.service";

export const addRazorpayPayment = async (req: Request, res: Response) => {
    try {
        console.log("----------------")
        const addpaymentHistoryResponse = await addrazorpayPaymentLink(req, res);
        console.log("*********************")
        return res
            .status(200)
            // .status(addpaymentHistoryResponse.code)
            .json(addpaymentHistoryResponse);
            // .json({ paymentid: addpaymentHistoryResponse.paymentID, paymenturl: addpaymentHistoryResponse.paymenturl });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: true,
            code: 500,
        });
    }
};
