import { IsPhoneNumber } from "class-validator";
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const authValidationSchema = {
  name: Joi.string().min(1).required(),
  phoneNumber: Joi.string().min(10).max(10).required(),
  email: Joi.string().max(40).required(),
  password: Joi.string().min(6).max(15).required(),
};

export const signupValidator = Joi.object().keys(authValidationSchema);

