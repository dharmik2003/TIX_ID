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

export const updatesignupService = async (req: Request, res: Response) => {
  try {
    const { id, name, phoneNumber, email, password } = req.body;

      if (!id) {
        return Error(
          ALL_ERROR_MESSAGES.ID_NOT_PROVIDED,
          HTTP_STATUS_CODES.NOT_FOUND
        );
      }

    const userRepository = AppDataSource.getRepository(User);

    // Find the user by ID
    const existingUser = await userRepository.findOne({ where: { id: id } });
    if (!existingUser) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.USER_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    if (name) existingUser.name = name;
    if (phoneNumber) existingUser.phoneNumber = phoneNumber;
    if (email) existingUser.email = email;
    if (password) existingUser.password = password;

    await userRepository.save(existingUser);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.USER_UPDATE),
      HTTP_STATUS_CODES.OK,
      existingUser
    );
  } catch (error) {
    console.log("Error while signupService:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_SUCCESS_MESSAGES.USER_UPDATE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
