import express from "express";
import { addShowTime } from "../../controllers/show-time/add-showtime.controller";

const router = express.Router();

router.post("/addshowtime", addShowTime);

export default router;
