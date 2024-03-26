import express, { Request, Response } from "express";
import { addSeatSearvice } from "../../services/seats/add-seats.service";

export const addSeats = async (req: Request, res: Response) => {
  try {
    const createMovieResponse = await addSeatSearvice(req, res);
    return res.status(createMovieResponse.code).json(createMovieResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
