import express, { Request, Response } from "express";
import { addScreenService } from "../../services/screens/add-screen.service"; // Adjust the path accordingly
import { addSeatLabelService } from "../../services/seat-label/add-seatlabel.service";
import { deleteScreenService } from "../../services/screens/delete-screen.service";

export const deleteScreen = async (req: Request, res: Response) => {
  try {
    const deleteScreenResponse = await deleteScreenService(req, res);
    return res.status(deleteScreenResponse.code).json(deleteScreenResponse);
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
