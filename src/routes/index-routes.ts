import express from "express";
import signup from "./auth/signup/signup.routes";
import login from "./auth/login/login.routes";
import movies from "./movies/movies.routes";
import theater from "./theater/theaters.routes";
import screen from "./screen/screen.routes";
import showtime from "./show-time/showTime.routes";
import seats from "./seats/seats.routes";
import seatlabel from "./seat-label/seatlabel.routes";
import voucher from "./voucher/voucher.routes";
import myshow from "./myshow/myshow.routes";
import payment from "./payment-history/payment-history.routes";
import comingsoon from "./comingsoon/comingsoon.routes";
import news from "./news/news.routes";
import mytickets from "./mytickets/mytickets.routes";
import tickets from "./tickets/tickets.routes";
import razorpay from "./razorpay-payment/razorpaypayment.route";
const router = express.Router();

router.use("/signup", signup);
router.use("/login", login);
router.use("/movies", movies);
router.use("/theater", theater);
router.use("/screen", screen);
router.use("/showtime", showtime);
router.use("/seats", seats);
router.use("/seatlabel", seatlabel);
router.use("/voucher", voucher);
router.use("/myshow", myshow);
router.use("/payment", payment);
router.use("/comingsoon", comingsoon);
router.use("/news", news);
router.use("/mytickets", mytickets);
router.use("/tickets", tickets);
router.use("/razorpay", razorpay);


export default router;
