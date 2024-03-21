import express from "express";
import { Validate } from "../../middlewares/validate-request.middlewares";
import { loginValidator } from "../../validators/auth/login.validator";
import { signupValidator } from "../../validators/auth/signup.validator";
import { login } from "../../controllers/auth/login.controller";
import { signup } from "../../controllers/auth/signup.controller";
const router = express.Router();
console.log("routes");

router
  .post("/login", Validate(loginValidator), login)
  .post("/signup", Validate(signupValidator), signup);

export default router;
