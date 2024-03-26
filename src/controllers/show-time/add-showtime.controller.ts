import express, { Request, Response } from "express";
import { addShowTimeService } from "../../services/show-time/add-showtime.service";

export const addShowTime = async (req: Request, res: Response) => {
  try {
    const addShowTimeResponse = await addShowTimeService(req, res);
    return res.status(addShowTimeResponse.code).json(addShowTimeResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
