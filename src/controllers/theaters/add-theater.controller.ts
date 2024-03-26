import express, { Request, Response } from "express";
import { createTheaterService } from "../../services/theaters/add-theater.service";

export const addTheater = async (req: Request, res: Response) => {
  try {
    const createTheaterResponse = await createTheaterService(req, res);
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
