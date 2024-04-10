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

export const deletesignupService = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    if (!id) {
      return Error(
        ALL_ERROR_MESSAGES.ID_NOT_PROVIDED,
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    const userRepository = AppDataSource.getRepository(User);

    // Check if the user exists
    const userToDelete = await userRepository.findOne({ where: { id: id } });
    if (!userToDelete) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.USER_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    // Delete the user
    await userRepository.delete(userToDelete.id);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.USER_DELETE),
      HTTP_STATUS_CODES.OK,
      userToDelete
    );
  } catch (error) {
    console.log("Error while deleting user:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.USER_DELETE),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
