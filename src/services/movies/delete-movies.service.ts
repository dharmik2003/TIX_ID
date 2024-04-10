import "dotenv/config";
import { Request, Response } from "express";
import { User } from "../../entities/auth/user.entity";
import { AppDataSource } from "../../config/data-source";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../../src/constants";
import { Error, Success } from "../../utils/response.utils";
import { Movies } from "../../entities/movies/movie.entity";

export const deleteMovieService = async (req: Request, res: Response) => {
  try {
    const id  = +req.params.id;

    const movieRepository = AppDataSource.getRepository(Movies);

    const movieToDelete = await movieRepository.findOne({ where: { id: id } });
    if (!movieToDelete) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MOVIE_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    await movieRepository.delete(movieToDelete.id);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.MOVIE_DELETE),
      HTTP_STATUS_CODES.OK,
      movieToDelete
    );
  } catch (error) {
    console.log("Error while deleting user:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.MOVIE_DELETE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
