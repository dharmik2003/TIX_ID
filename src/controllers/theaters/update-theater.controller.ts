import express, { Request, Response } from "express";
import { updateTheaterService } from "../../services/theaters/update-theater.service";

export const updateTheater = async (req: Request, res: Response) => {
  try {
    const updateTheaterResponse = await updateTheaterService(req, res);
    return res.status(updateTheaterResponse.code).json(updateTheaterResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
