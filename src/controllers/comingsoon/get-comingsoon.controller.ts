import express, { Request, Response } from "express";
import { getComingSoonService } from "../../services/comingsoon/get-comingsoon.service";

export const getComingSoon = async (req: Request, res: Response) => {
  try {
    const getComingSoonResponse = await getComingSoonService(req, res);
    return res.status(getComingSoonResponse.code).json(getComingSoonResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
