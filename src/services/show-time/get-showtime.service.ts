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
import { Movies } from "../../entities/movies/movie.entity";
import { Screens } from "../../entities/screens/screen.entity";

export const getShowTimeService = async (req: Request, res: Response) => {
  try {
    const showtimeRepository = AppDataSource.getRepository(ShowTime);
    const existingshowtime = await showtimeRepository.find({
      relations: ["screen","movie","screen.theater"],
      order: { id: "ASC" },
    });
    if (!existingshowtime) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SHOWTIME_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }
    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SHOWTIME_FETCH),
      HTTP_STATUS_CODES.OK,
      existingshowtime
    );
  } catch (error) {
    console.log("Error while get-showtime.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SHOWTIME_FETCH),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
