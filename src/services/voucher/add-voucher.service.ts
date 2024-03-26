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

export const addVoucherService = async (req: Request, res: Response) => {
  try {
    const { vochercode, price} = req.body;

    const voucherRepository = await AppDataSource.getRepository(Voucher);

    const newvoucher=await voucherRepository.create({code:vochercode,price:price});

    await voucherRepository.save(newvoucher);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.VOUCHER_USED),
      HTTP_STATUS_CODES.OK,
      newvoucher
    );
  } catch (error) {
    console.log("Error while voucher.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.VOUCHER_USED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
