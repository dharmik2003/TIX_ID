import express from "express";
import { verifyToken } from "../../middlewares/jwtTokenverify/jwtToken.middleware";
import { getMytickets } from "../../controllers/mytickets/get-mytickets.controller";

const router = express.Router();

router.get("/get",verifyToken, getMytickets);

export default router;
