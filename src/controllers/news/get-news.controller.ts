import express, { Request, Response } from "express";
import { getNewsService } from "../../services/news/get-comingsoon.service";

export const getNews = async (req: Request, res: Response) => {
  try {
    const getnewsResponse = await getNewsService(req, res);
    return res.status(getnewsResponse.code).json(getnewsResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
