import express from "express";
import { addMyShow } from "../../controllers/myshow/add-myshow.controller";
import { verifyToken } from "../../middlewares/jwtTokenverify/jwtToken.middleware";

const router = express.Router();

router.post("/addmyshow",verifyToken, addMyShow);

export default router;
