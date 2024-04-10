import express, { Request, Response } from "express";
import { getShowTimeService } from "../../services/show-time/get-showtime.service";

export const getShowTime = async (req: Request, res: Response) => {
  try {
    const getShowTimeResponse = await getShowTimeService(req, res);
    return res.status(getShowTimeResponse.code).json(getShowTimeResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
