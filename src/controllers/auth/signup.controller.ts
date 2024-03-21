import { Request, Response } from "express";
import { signupService } from "../../services/auth/signup.service";

export const signup = async (req: Request, res: Response) => {
  try {
    const signupResponse = await signupService(req, res);
    return res.status(signupResponse.code).json(signupResponse);
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
