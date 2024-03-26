import express from "express";
import { addScreen } from "../../controllers/screens/add-screen.controller";

const router = express.Router();

router.post("/addscreen", addScreen);

export default router;
