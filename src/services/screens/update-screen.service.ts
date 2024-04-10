

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

export const updateScreenService = async (req: Request, res: Response) => {
  try {
    const { screenId, dimension,theaterId } = req.body;

    const screenRepository = AppDataSource.getRepository(Screens);
    const theaterRepository = AppDataSource.getRepository(Theaters);

    if (!screenId) {
      return Error(
        ALL_ERROR_MESSAGES.ID_NOT_PROVIDED,
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    const existingData = await screenRepository.findOne({
      where: { id: +screenId },
    });

    if (!existingData) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SCREEN_NOTFOUND),HTTP_STATUS_CODES.NOT_FOUND
      );
    }
    console.log(existingData)

    if(dimension)existingData.dimension=dimension

    if(theaterId){
      const existingtheater = await screenRepository.findOne({
        where: { id: +theaterId },
      });
      if(!existingtheater)return Error(ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.THEATER_NOTFOUND))
      else{
        existingData.theater = theaterId ;
      }
    }
     await screenRepository.save(existingData);
    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SHOWTIME_UPDATE),
      HTTP_STATUS_CODES.OK,
      existingData
    );
  } catch (error) {
    console.log("Error while add-screen.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SHOWTIME_UPDATE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
