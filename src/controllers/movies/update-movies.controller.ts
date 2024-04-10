import express, { Request, Response } from "express";
import { createMovieService } from "../../services/movies/add-movies.service";
import { updatesignupService } from "../../services/movies/update-movies.service";

export const updateMovies = async (req: Request, res: Response) => {
  try {
    const updateMovieResponse = await updatesignupService(req, res);
    return res.status(updateMovieResponse.code).json(updateMovieResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
