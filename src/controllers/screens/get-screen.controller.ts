import express, { Request, Response } from "express";
import { addScreenService } from "../../services/screens/add-screen.service"; // Adjust the path accordingly
import { addSeatLabelService } from "../../services/seat-label/add-seatlabel.service";
import { getScreenService } from "../../services/screens/get-screen.service";

export const getScreen = async (req: Request, res: Response) => {
  try {
    const getScreenResponse = await getScreenService(req, res);
    return res.status(getScreenResponse.code).json(getScreenResponse);
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
