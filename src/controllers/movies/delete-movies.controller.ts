import express, { Request, Response } from "express";
import { deleteMovieService } from "../../services/movies/delete-movies.service";

export const deleteMovies = async (req: Request, res: Response) => {
  try {
    const deleteMovieResponse = await deleteMovieService(req, res);
    return res.status(deleteMovieResponse.code).json(deleteMovieResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
  }
};
