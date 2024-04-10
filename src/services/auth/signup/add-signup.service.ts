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
import jwt from "jsonwebtoken";
import "dotenv/config";

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
    const existingphonenumber = await userRepository.findOne({where:{phoneNumber:phoneNumber}});
    if (existingphonenumber){
      return Error(
        SUCCESS_MESSAGES._FETCHED(ALL_ERROR_MESSAGES.PhoneNumber_SYSTEM),
        HTTP_STATUS_CODES.UNAUTHORIZED
      );
    }
      const newUser = userRepository.create({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      });

    console.log(newUser);

    const savedUser= await userRepository.save(newUser);

    // Generate JWT token
    // const token = jwt.sign({ userId: savedUser.id }, process.env.JWT_SECRET as string)
    // 

    // const token = jwt.sign( savedUser,"dharmik" // process.env.JWT_SECRET as string
    // );
    const token = jwt.sign({ userId: savedUser.id }, "dharmik");
    console.log(token);

    const newdata: any = { ...savedUser, token };


    // await userRepository.save(newdata);
    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.USER_ADDED),
      HTTP_STATUS_CODES.OK,
      newdata
    );
  } catch (error) {
    console.log("Error while signupService:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.USER_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
