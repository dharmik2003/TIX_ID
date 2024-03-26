

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

export const addScreenService = async (req: Request, res: Response) => {
  try {
    const { dimension,theaterId } = req.body;

    const screenRepository = AppDataSource.getRepository(Screens);
    const theaterRepository = AppDataSource.getRepository(Theaters);

    const existingData = await theaterRepository.findOne({
      where: { id: +theaterId },
    });

    if (!existingData) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.THEATER_NOTFOUND)
      );
    }
    console.log(existingData)

    const newData = screenRepository.create({
      dimension,
      theater: existingData,
    });
    await screenRepository.save(newData);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.THEATER_ADDED),
      HTTP_STATUS_CODES.OK,
      newData
    );
  } catch (error) {
    console.log("Error while add-screen.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.THEATER_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
