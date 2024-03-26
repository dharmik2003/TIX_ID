import express,{Request,Response} from "express";
import {getMovieService } from "../../services/movies/get-movies.service";

export const getMovies = async(req:Request,res:Response)=>{
    try{
        const getMovieResponse = await getMovieService(req, res);
        return res.status(getMovieResponse.code).json(getMovieResponse)
    }
    catch(error){
        return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: true,
      code: 500,
    });
    }
}