import Joi from "joi";

const todoValidationSchema = {
  text: Joi.string().required(),
  completed: Joi.boolean().required(),
};

export const todoValidator = Joi.object().keys(todoValidationSchema);