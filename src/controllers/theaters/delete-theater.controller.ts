import express, { Request, Response } from "express";
import { deleteTheaterService } from "../../services/theaters/delete-theater.service";

export const deleteTheater = async (req: Request, res: Response) => {
  try {
    const deleteTheaterResponse = await deleteTheaterService(req, res);
    return res.status(deleteTheaterResponse.code).json(deleteTheaterResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
