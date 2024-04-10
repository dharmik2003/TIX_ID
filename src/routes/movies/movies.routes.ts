import express from "express";
import { addMovies } from "../../controllers/movies/add-movies.controller";
import { getMovies } from "../../controllers/movies/get-movies.controller";
import { updateMovies } from "../../controllers/movies/update-movies.controller";
import { deleteMovies } from "../../controllers/movies/delete-movies.controller";

const router = express.Router();

router.get("/getmovie", getMovies).post("/addmovie", addMovies).put("/updatemovie",updateMovies).delete("/deletemovie/:id",deleteMovies);

export default router;
