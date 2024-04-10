import express, { Request, Response } from "express";
import { addNewsService } from "../../services/news/add-comingsoon.service";

export const addNews = async (req: Request, res: Response) => {
  try {
    const addNewsResponse = await addNewsService(req, res);
    return res.status(addNewsResponse.code).json(addNewsResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
