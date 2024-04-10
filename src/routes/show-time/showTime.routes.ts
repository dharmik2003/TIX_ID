import express from "express";
import { addShowTime } from "../../controllers/show-time/add-showtime.controller";
import { getShowTime } from "../../controllers/show-time/get-showtime.controller";

const router = express.Router();

router.get('/get',getShowTime).post("/addshowtime", addShowTime);

export default router;
