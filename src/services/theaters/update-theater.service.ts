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

export const updateTheaterService = async (req: Request, res: Response) => {
  try {
    const { theaterId,name ,address,city,badge } = req.body;
    
    if (!theaterId) {
      return Error(
        ALL_ERROR_MESSAGES.ID_NOT_PROVIDED,
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    const theaterRepository = await AppDataSource.getRepository(Theaters);

    const updatetheater = await  theaterRepository.findOne({where:{id:theaterId}})
    if (!updatetheater) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.THEATER_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    if(name)updatetheater.name = name;
    if(address)updatetheater.address = address;
    if(city)updatetheater.city = city;
    if(badge)updatetheater.badge = badge;

    await theaterRepository.save(updatetheater);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.THEATER_UPDATE),
      HTTP_STATUS_CODES.OK,
      updatetheater
    );

  } catch (error) {
    console.log("Error while add-theater.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.THEATER_UPDATE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
