import express from "express";
import { addComingSoon } from "../../controllers/comingsoon/add-comingsoon.controller";
import { getComingSoon } from "../../controllers/comingsoon/get-comingsoon.controller";

const router = express.Router();

router.get("/get", getComingSoon).post("/add", addComingSoon);

export default router;
