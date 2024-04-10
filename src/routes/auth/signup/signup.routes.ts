import express from "express";
import { Validate } from "../../../middlewares/validate-request.middlewares";
import { signupValidator } from "../../../validators/auth/signup.validator";
import { signup } from "../../../controllers/auth/signup/add-signup.controller";
import { getSignup } from "../../../controllers/auth/signup/get-signup.controller";
import { updateSignup } from "../../../controllers/auth/signup/update-signup.controller";
import { deleteSignup } from "../../../controllers/auth/signup/delete-signup.controller";
const router = express.Router();
console.log("routes");

router
  .get("/get", getSignup)
  .post("/add", Validate(signupValidator), signup)
  .put("/update", updateSignup)
  .delete("/delete", deleteSignup);

export default router;
