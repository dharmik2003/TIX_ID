import express, { Request, Response } from "express";
import { addVoucherService } from "../../services/voucher/add-voucher.service";
import { deleteVoucherService } from "../../services/voucher/delete-voucher.service";

export const deleteVoucher = async (req: Request, res: Response) => {
  try {
    const deletevoucherResponse = await deleteVoucherService(req, res);
    return res.status(deletevoucherResponse.code).json(deletevoucherResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
