

import { AppDataSource } from "../../config/data-source";
import { Request, Response } from "express";
import { Screens } from "../../entities/screens/screen.entity";
import { Theaters } from "../../entities/theaters/theater.entity";
import { Error, Success } from "../../utils/response.utils";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { threadId } from "worker_threads";

export const getScreenService = async (req: Request, res: Response) => {
  try {

    const screenRepository = AppDataSource.getRepository(Screens);
    const existingData = await screenRepository.find({
      relations: ["theater"],
    });
    if (!existingData) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SCREEN_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }
    

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SCREEN_FETCH),
      HTTP_STATUS_CODES.OK,
      existingData
    );
  } catch (error) {
    console.log("Error while add-screen.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SCREEN_FETCH),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
