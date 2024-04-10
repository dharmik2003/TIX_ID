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
import { ComingSoon } from "../../entities/comingsoon/comingsoon.entity";

export const addComingSoonService = async (req: Request, res: Response) => {
  try {
    const { title, image, description,tag,type1, type2, type3, date } =
      req.body;
    console.log(title);

    const comingsoonRepository = await AppDataSource.getRepository(ComingSoon);
    console.log(comingsoonRepository);

    const news = new ComingSoon();

    news.title = title;
    news.image = image;
    news.date = date;
    news.tag = tag;
    news.type1 = type1;
    news.type2 = type2;
    news.type3 = type3;
    news.description = description;
    await comingsoonRepository.save(news);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.COMINGSOON_ADDED),
      HTTP_STATUS_CODES.OK,
      [news]
    );
  } catch (error) {
    console.log("Error while add-commingsoon.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.COMINGSOON_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
