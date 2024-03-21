import { IsPhoneNumber } from "class-validator";
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const authValidationSchema = {
  phoneNumber: Joi.string().min(10).max(10).required(),
  password: Joi.string().min(6).max(15).required(),
};

export const loginValidator = Joi.object().keys(authValidationSchema);
