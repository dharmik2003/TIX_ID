import express, { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { Movies } from "../../entities/movies/movie.entity";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { Error, Success } from "../../utils/response.utils";
import { Theaters } from "../../entities/theaters/theater.entity";

export const getTheaterService = async (req: Request, res: Response) => {
  try {
    
    const theaterRepository = await AppDataSource.getRepository(Theaters);
    const theaterdata = await theaterRepository.find() 

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.THEATER_FETCH),
      HTTP_STATUS_CODES.OK,
      theaterdata
    );
  } catch (error) {
    console.log("Error while add-theater.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.THEATER_FETCH),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
