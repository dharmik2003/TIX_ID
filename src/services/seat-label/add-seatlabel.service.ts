import express, { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { Success, Error } from "../../utils/response.utils";
import { SeatLabel } from "../../entities/seat-label/seat-label.entity";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";

export const addSeatLabelService = async (req: Request, res: Response) => {
  try {
    const { screenId } = req.body;
    const seatLabelRepository = AppDataSource.getRepository(SeatLabel);

    const seatLabelData = await seatLabelRepository.find({
      where: { screen: screenId },
    });
    console.log(seatLabelData);

    if (!seatLabelData) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SEAT_LABELS_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SEAT_LABELS_ADDED),
      HTTP_STATUS_CODES.OK,
      seatLabelData
    );
  } catch (error) {
    console.log("Error while retrieving seat label:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SEAT_LABELS_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
