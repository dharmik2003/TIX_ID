import express from "express";
import { getNews } from "../../controllers/news/get-news.controller";
import { addNews } from "../../controllers/news/add-news.controller";

const router = express.Router();

router.get("/get", getNews).post("/add", addNews);

export default router;
