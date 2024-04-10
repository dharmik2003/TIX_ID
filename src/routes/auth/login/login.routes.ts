import express from "express";
import { Validate } from "../../../middlewares/validate-request.middlewares";
import { loginValidator } from "../../../validators/auth/login.validator";
import { login } from "../../../controllers/auth/login.controller";
const router = express.Router();
console.log("routes");

router
  .post("/add", Validate(loginValidator), login)

export default router;
