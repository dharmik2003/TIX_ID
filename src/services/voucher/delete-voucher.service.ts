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

export const deleteVoucherService = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const voucherRepository = await AppDataSource.getRepository(Voucher);

    // Check if the voucher exists
    const voucher = await voucherRepository.findOne({where:{id:+id}});
    if (!voucher) {
      return Error(
        ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.VOUCHER_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    // Delete the voucher
    await voucherRepository.delete(id);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.VOUCHER_DELETE),
      HTTP_STATUS_CODES.OK,
      { deletedVoucherId: id }
    );
  } catch (error) {
    console.log("Error while deleting voucher:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.VOUCHER_DELETE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};

