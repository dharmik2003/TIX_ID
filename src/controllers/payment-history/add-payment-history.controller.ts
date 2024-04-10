import express, { Request, Response } from "express";
import { addMyShowService } from "../../services/myshow/add-myshow.service";
import { paymentHistoryService } from "../../services/payment-history/payment-history.service";

export const addpayment = async (req: Request, res: Response) => {
  try {
    const addpaymentHistoryResponse = await paymentHistoryService(req, res);
    return res
      .status(addpaymentHistoryResponse.code)
      .json(addpaymentHistoryResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
