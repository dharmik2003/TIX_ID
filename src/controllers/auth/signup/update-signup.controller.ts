import { Request, Response } from "express";
import { updatesignupService } from "../../../services/auth/signup/update-signup.service";

export const updateSignup = async (req: Request, res: Response) => {
  try {
    const updateSignupResponse = await updatesignupService(req, res);
    return res.status(updateSignupResponse.code).json(updateSignupResponse);
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
