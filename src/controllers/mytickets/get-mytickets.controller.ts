import express, { Request, Response } from "express";
import { getmyticketService } from "../../services/mytickets/get-mytickets.service";

export const getMytickets = async (req: Request, res: Response) => {
  try {
    const getMyticketsResponse = await getmyticketService(req, res);
    return res.status(getMyticketsResponse.code).json(getMyticketsResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
