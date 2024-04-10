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

export const addShowTimeService = async (req: Request, res: Response) => {
  try {
    const {date, time,price, movieId, screenId } = req.body;

    const screenRepository = AppDataSource.getRepository(Screens);
    const moviesRepository = AppDataSource.getRepository(Movies);
    const showtimeRepository = AppDataSource.getRepository(ShowTime);

    const existingscreen = await screenRepository.findOne({
      where: { id: +screenId },
    });
    const existingmovies = await moviesRepository.findOne({
      where: { id: +movieId },
    });

    //error message pending
    if (!existingmovies) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MOVIE_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }
    console.log(existingmovies);
    if (!existingscreen) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SCREEN_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }
    console.log(existingscreen);

      const newData = showtimeRepository.create({
        date:date,
        time: time,
        price:price,
        movie: existingmovies,
        screen: existingscreen,
      });
      
    console.log(newData);
    await showtimeRepository.save(newData);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SHOWTIME_ADDED),
      HTTP_STATUS_CODES.OK,
      newData
    );
  } catch (error) {
    console.log("Error while add-theater.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SHOWTIME_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
