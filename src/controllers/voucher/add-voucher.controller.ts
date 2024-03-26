import express, { Request, Response } from "express";
import { addVoucherService } from "../../services/voucher/add-voucher.service";

export const addVoucher = async (req: Request, res: Response) => {
  try {
    const voucherResponse = await addVoucherService(req, res);
    return res.status(voucherResponse.code).json(voucherResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
