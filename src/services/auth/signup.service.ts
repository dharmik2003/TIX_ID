import "dotenv/config";
import { Request, Response } from "express";
import { User } from "../../entities/auth/user.entity";
import { AppDataSource } from "../../config/data-source";
import {
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { Error, Success } from "./../../utils/response.utils";

export const signupService = async (req: Request, res: Response) => {
  try {
    const { name, phoneNumber, email, password } = req.body;

    if (!name || !phoneNumber || !email || !password) {
      return Error(
        ERROR_MESSAGES._InputMisssing("name, phone number, email, or password"),
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }

    const userRepository = AppDataSource.getRepository(User);

    // const existingUser = await userRepository.findOne({
    //   where: { phoneNumber },
    // });

    // if (existingUser) {
    //   return Error(
    //     SUCCESS_MESSAGES._FETCHED("Phone number already exists"),
    //     HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    //   );
    // }

    // const newUser: User = new User();
    // newUser.name = name;
    // newUser.email = email;
    // newUser.phoneNumber = phoneNumber;
    // newUser.password = password;

    const newUser = userRepository.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password
    })


    console.log(newUser);

    await userRepository.save(newUser);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY("Signup"),
      HTTP_STATUS_CODES.OK,
      newUser
    );
  } catch (error) {
    console.log("Error while signupService:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError("signupService"),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
