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

export const deleteScreenService = async (req: Request, res: Response) => {
  try {
    const screenId  = +req.params.id;
    const screenRepository = AppDataSource.getRepository(Screens);

    const existingData = await screenRepository.findOne({
      where: { id: +screenId },
    });

    if (!existingData) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SCREEN_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }
    console.log(existingData)

    await screenRepository.delete(existingData.id);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SCREEN_DELETE),
      HTTP_STATUS_CODES.OK,
      existingData
    );
  } catch (error) {
    console.log("Error while add-screen.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SCREEN_DELETE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
