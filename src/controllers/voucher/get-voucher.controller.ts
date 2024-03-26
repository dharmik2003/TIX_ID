import express, { Request, Response } from "express";
import { addVoucherService } from "../../services/voucher/add-voucher.service";
import { allVoucherService } from "../../services/voucher/all-voucher.service";

export const getVoucher = async (req: Request, res: Response) => {
  try {
    const getvoucherResponse = await allVoucherService(req, res);
    return res.status(getvoucherResponse.code).json(getvoucherResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
