import express, { Request, Response } from "express";
import { updateScreenService } from "../../services/screens/update-screen.service";

export const updateScreen = async (req: Request, res: Response) => {
  try {
    const updateScreenResponse = await updateScreenService(req, res);
    return res.status(updateScreenResponse.code).json(updateScreenResponse);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
