import express, { Request, Response } from "express";
import { addSeatLabelService } from "../../services/seat-label/add-seatlabel.service";

export const addSeatLabel = async (req: Request, res: Response) => {
  try {
    const addScreenResponse = await addSeatLabelService(req, res);
    return res.status(addScreenResponse.code).json(addScreenResponse);
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
