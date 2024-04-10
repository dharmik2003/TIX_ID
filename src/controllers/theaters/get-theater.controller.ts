import express, { Request, Response } from "express";
import { getTheaterService } from "../../services/theaters/get-theater.service";

export const getTheater = async (req: Request, res: Response) => {
  try {
    const getTheaterResponse = await getTheaterService(req, res);
    return res.status(getTheaterResponse.code).json(getTheaterResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
