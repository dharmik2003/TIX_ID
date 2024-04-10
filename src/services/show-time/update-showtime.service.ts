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

export const uodateShowTimeService = async (req: Request, res: Response) => {
  try {
    const { id, time,price, movieId, screenId } = req.body;

    const screenRepository = AppDataSource.getRepository(Screens);
    const moviesRepository = AppDataSource.getRepository(Movies);
    const showtimeRepository = AppDataSource.getRepository(ShowTime);

    const existingshowtime = await showtimeRepository.findOne({
      where: { id: +id },
    });

    if (!existingshowtime) {
      return Error(ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SHOWTIME_NOTFOUND),HTTP_STATUS_CODES.NOT_FOUND);
    }

    if(time) existingshowtime.time=time
    if(price) existingshowtime.price=price
    if (screenId){
      const existingscreen = await screenRepository.findOne({
        where: { id: +screenId },
      });
      if (!existingscreen) {
        return Error(
          ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SCREEN_NOTFOUND)
        );
      }
      existingshowtime.screen = existingscreen;
    }

    if (movieId){
       const existingmovies = await moviesRepository.findOne({
         where: { id: +movieId },
       });

       if (!existingmovies) {
         return Error(
           ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MOVIE_NOTFOUND)
         );
       }

       existingshowtime.movie = existingmovies;
    }
   
    await showtimeRepository.save(existingshowtime);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SHOWTIME_UPDATE),
      HTTP_STATUS_CODES.OK,
      existingshowtime
    );
  } catch (error) {
    console.log("Error while add-theater.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SHOWTIME_UPDATE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
