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

export const createMovieService = async (req: Request, res: Response) => {
  try {
    const { title, image, duration, rate, tag, director } = req.body;
    console.log(title);

    const movieRepository = await AppDataSource.getRepository(Movies);
    console.log(movieRepository);

    const newuser=new Movies();

    newuser.title=title;
    newuser.image=image;
    newuser.duration=duration;
    newuser.rate=rate;
    newuser.tag=tag;
    newuser.director=director;

    await movieRepository.save(newuser);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.MOVIE_ADDED),
      HTTP_STATUS_CODES.OK,
      newuser
    );
  } catch (error) {
    console.log("Error while create-movies.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.MOVIE_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
