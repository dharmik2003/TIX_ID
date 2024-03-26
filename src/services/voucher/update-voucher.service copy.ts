import express, { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { Error, Success } from "../../utils/response.utils";
import { Voucher } from "../../entities/voucher/voucher.entity";

export const updateVoucherService = async (req: Request, res: Response) => {
  try {
    const { id, vochercode, price } = req.body;

    const voucherRepository = await AppDataSource.getRepository(Voucher);

    // Find the voucher by ID
    const voucher = await voucherRepository.findOne({ where: { id: +id } });
    if (!voucher) {
      return Error(
        ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.VOUCHER_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    // Update voucher properties
    voucher.code = vochercode;
    voucher.price = price;

    // Save the changes
    await voucherRepository.save(voucher);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.VOUCHER_UPDATE),
      HTTP_STATUS_CODES.OK,
      voucher
    );
  } catch (error) {
    console.log("Error while updating voucher:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.VOUCHER_UPDATE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};

