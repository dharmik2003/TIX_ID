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
import { ShowTime } from "../../entities/show-time/showtime.entity";

export const deleteShowTimeService = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const showtimeRepository = AppDataSource.getRepository(ShowTime);

    const existingshowtime = await showtimeRepository.findOne({
      where: { id: +id },
    });

    if (!existingshowtime) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SHOWTIME_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }
  
    await showtimeRepository.delete(existingshowtime);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SHOWTIME_DELETE),
      HTTP_STATUS_CODES.OK,
      existingshowtime
    );
  } catch (error) {
    console.log("Error while add-theater.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SHOWTIME_DELETE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
