import { Request, Response } from "express";
import { getsignupService } from "../../../services/auth/signup/get-signup.service";

export const getSignup = async (req: Request, res: Response) => {
  try {
    const getSignupResponse = await getsignupService(req, res);
    return res.status(getSignupResponse.code).json(getSignupResponse);
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
