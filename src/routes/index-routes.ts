import express from "express";
import auth from "./auth/auth.routes";
import movies from "./movies/movies.routes"
import theater from "./theater/theaters.routes"
import screen from "./screen/screen.routes"
import showtime from "./show-time/showTime.routes";
import seats from "./seats/seats.routes";
import seatlabel from "./seat-label/seatlabel.routes";
import voucher from "./voucher/voucher.routes";
const router = express.Router();

router.use("/auth",  auth);
router.use("/movies",movies);
router.use("/theater",theater);
router.use("/screen",screen);
router.use("/showtime", showtime);
router.use("/seats", seats);
router.use("/seatlabel", seatlabel);
router.use("/voucher", voucher);
export default router;
