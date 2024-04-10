import express, { Request, Response } from "express";
import { addTheaterService } from "../../services/theaters/add-theater.service";

export const addTheater = async (req: Request, res: Response) => {
  try {
    const createTheaterResponse = await addTheaterService(req, res);
    return res.status(createTheaterResponse.code).json(createTheaterResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
