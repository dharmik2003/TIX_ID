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
export const getComingSoonService = async (req: Request, res: Response) => {
  try {
    const newsRepository = await AppDataSource.getRepository(ComingSoon);

    const existingTitleNews = await newsRepository.find();

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.COMINGSOON_FETCH),
      HTTP_STATUS_CODES.OK,
      existingTitleNews
    );
  } catch (error) {
    console.log("Error while get-commingsoon.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.COMINGSOON_FETCH),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
