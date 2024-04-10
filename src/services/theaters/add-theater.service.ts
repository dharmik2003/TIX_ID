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

export const addTheaterService = async (req: Request, res: Response) => {
  try {
    const { name ,address,city,badge } = req.body;

    const theaterRepository = await AppDataSource.getRepository(Theaters);
    console.log(theaterRepository);

    const newuser = new Theaters();

    newuser.name = name;
    newuser.address = address;
    newuser.city = city;
    newuser.badge = badge;

    await theaterRepository.save(newuser);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.THEATER_ADDED),
      HTTP_STATUS_CODES.OK,
      newuser
    );
  } catch (error) {
    console.log("Error while add-theater.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.THEATER_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
