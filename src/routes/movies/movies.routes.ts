import express from "express";
import { addMovies } from "../../controllers/movies/add-movies.controller";
import { getMovies } from "../../controllers/movies/get-movies.controller";

const router = express.Router();

router.get("/getmovie", getMovies).post("/addmovie", addMovies);

export default router;
