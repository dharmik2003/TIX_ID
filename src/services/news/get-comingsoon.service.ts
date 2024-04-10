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
import { News } from "../../entities/news/news.entity";

export const getNewsService = async (req: Request, res: Response) => {
  try {
    const newsRepository = await AppDataSource.getRepository(News);

    const existingTitleNews = await newsRepository.find();

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.NEWS_FETCh),
      HTTP_STATUS_CODES.OK,
      existingTitleNews
    );
  } catch (error) {
    console.log("Error while create-movies.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.NEWS_FETCh),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
