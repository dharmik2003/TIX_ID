import express, { Request, Response } from "express";
import { addMyShowService } from "../../services/myshow/add-myshow.service";

export const addMyShow = async (req: Request, res: Response) => {
  try {
    const addMyShowResponse = await addMyShowService(req, res);
    return res.status(addMyShowResponse.code).json(addMyShowResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
