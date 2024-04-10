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
} from "../../constants";
import { Error, Success } from "../../utils/response.utils";
import { Movies } from "../../entities/movies/movie.entity";

export const updatesignupService = async (req: Request, res: Response) => {
  try {
    const { id, title, image, duration, rate, tag,direactor} = req.body;

    if (!id) {
      return Error(
        ALL_ERROR_MESSAGES.ID_NOT_PROVIDED,
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    const movieRepository = AppDataSource.getRepository(Movies);

    const updatemovie = await movieRepository.findOne({ where: { id: id } });
    if (!updatemovie) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MOVIE_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    if (title) updatemovie.title= title;
    if (image) updatemovie.image = image;
    if (duration) updatemovie.duration = duration;
    if (rate) updatemovie.rate = rate;
    if (tag) updatemovie.tag = tag;
    if (direactor) updatemovie.director =direactor;

    await movieRepository.save(updatemovie);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.MOVIE_UPDATE),
      HTTP_STATUS_CODES.OK,
      updatemovie
    );
  } catch (error) {
    console.log("Error while deleting user:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.MOVIE_UPDATE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
