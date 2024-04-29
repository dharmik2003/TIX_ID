import dotenv from "dotenv";
import Razorpay from "razorpay";
dotenv.config();

export const razorpay = new Razorpay({
  key_id: "rzp_test_od4E6v1K9n5gnI",
  key_secret: "r8HuLkJv6fbJxfoCHo7VjM1C",
});