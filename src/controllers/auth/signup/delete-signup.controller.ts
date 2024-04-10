import { Request, Response } from "express";
import { signupService } from "../../../services/auth/signup/add-signup.service";
import { deletesignupService } from "../../../services/auth/signup/delete-signup.service";

export const deleteSignup = async (req: Request, res: Response) => {
  try {
    const deleteSignupResponse = await deletesignupService(req, res);
    return res.status(deleteSignupResponse.code).json(deleteSignupResponse);
  } catch (error) {
    console.error("Error in Signup:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
