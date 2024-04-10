import express,{ Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { Movies } from "../../entities/movies/movie.entity";
import { ALL_ERROR_MESSAGES, ALL_SUCCESS_MESSAGES, ERROR_MESSAGES, HTTP_STATUS_CODES, SUCCESS_MESSAGES } from "../../constants";
import { Error, Success } from "../../utils/response.utils";

export const getMovieService= async (req: Request, res: Response) => {
  try {

    // const {id} = req.body
    // if(!id){
    //   return Error(ALL_ERROR_MESSAGES.ID_NOT_PROVIDED,HTTP_STATUS_CODES.NOT_FOUND)
    // }

    const movieRepository=AppDataSource.getRepository(Movies)
    // const movies=await movieRepository.findOne({where:{id:id}})
    const movies=await movieRepository.find()
    
    if(!movies){
      return Error(
        ALL_ERROR_MESSAGES.MOVIE_NOTFOUND,
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.MOVIE_FETCH),
      HTTP_STATUS_CODES.OK,
      movies
    );


  } catch (error) {
    console.log("Error while get-movies.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.MOVIE_FETCH),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
