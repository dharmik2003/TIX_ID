import express, { Request, Response } from "express";
import { getticketService } from "../../services/tickets/get-tickets.service";

export const getticketsController = async (req: Request, res: Response) => {
  try {
    const getticketsResponse = await getticketService(req, res);
    return res.status(getticketsResponse.code).json(getticketsResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
