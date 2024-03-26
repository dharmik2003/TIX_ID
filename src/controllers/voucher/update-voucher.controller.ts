import express, { Request, Response } from "express";
import { addVoucherService } from "../../services/voucher/add-voucher.service";
import { updateVoucherService } from "../../services/voucher/update-voucher.service copy";

export const updateVoucher = async (req: Request, res: Response) => {
  try {
    const updatevoucherResponse = await updateVoucherService(req, res);
    return res.status(updatevoucherResponse.code).json(updatevoucherResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
