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

export const addNewsService = async (req: Request, res: Response) => {
  try {
    const { title, image, date, tag, trailer, description, like } = req.body;
    console.log(title);

    const newsRepository = await AppDataSource.getRepository(News);
    console.log(newsRepository);

    const news = new News();

    news.title = title;
    news.image = image;
    news.date = date;
    news.tag = tag;
    news.trailer = trailer;
    news.description = description;
    news.like = like;

    await newsRepository.save(news);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.NEWS_ADDDED),
      HTTP_STATUS_CODES.OK,
      [news]
    );
  } catch (error) {
    console.log("Error while create-movies.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.NEWS_ADDDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
