import "dotenv/config";
import { Request, Response } from "express";
import { User } from "../../../entities/auth/user.entity";
import { AppDataSource } from "../../../config/data-source";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../../constants";
import { Error, Success } from "../../../utils/response.utils";

export const getsignupService = async (req: Request, res: Response) => {
  try {

   
    const  userRepository = AppDataSource.getRepository(User)
    const newUser= await userRepository.find()

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.USER_FOUND),
      HTTP_STATUS_CODES.OK,
      newUser
    );
  } catch (error) {
    console.log("Error while signupService:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.USER_GET),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
