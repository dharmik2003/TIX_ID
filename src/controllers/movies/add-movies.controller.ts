import express, { Request, Response } from "express";
import { createMovieService } from "../../services/movies/create-movies.service";

export const addMovies = async (req: Request, res: Response) => {
  try {
    const createMovieResponse = await createMovieService(req, res);
    return res.status(createMovieResponse.code).json(createMovieResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
