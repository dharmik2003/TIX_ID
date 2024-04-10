import express, { Request, Response } from "express";
import { addComingSoonService } from "../../services/comingsoon/add-comingsoon.service";

export const addComingSoon = async (req: Request, res: Response) => {
  try {
    const addComingSoonResponse = await addComingSoonService(req, res);
    return res.status(addComingSoonResponse.code).json(addComingSoonResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
