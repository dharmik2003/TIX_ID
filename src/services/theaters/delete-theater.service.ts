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
import { Theaters } from "../../entities/theaters/theater.entity";

export const deleteTheaterService = async (req: Request, res: Response) => {
  try {
    const theaterId = +req.params.id;
    const theaterRepository = await AppDataSource.getRepository(Theaters);
    const existingtheater = await theaterRepository.findOne({ where: { id:theaterId}})
    if(!existingtheater) return Error(
      ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.THEATER_NOTFOUND),
      HTTP_STATUS_CODES.NOT_FOUND
    );


    await theaterRepository.delete(existingtheater.id);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.THEATER_DELETE),
      HTTP_STATUS_CODES.OK,
      existingtheater
    );
  } catch (error) {
    console.log("Error while add-theater.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.THEATER_DELETE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
