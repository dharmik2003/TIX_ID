import { Request, Response } from "express";
import { loginService } from "../../services/auth/login.service";

export const login = async (req: Request, res: Response) => {
  try {
    const loginResponse = await loginService(req, res);
    return res.status(loginResponse.code).json(loginResponse);
  } catch (error) {
    console.error("Error in Login:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
