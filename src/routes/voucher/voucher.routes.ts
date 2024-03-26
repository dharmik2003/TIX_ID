import express from "express";
import { addVoucher } from "../../controllers/voucher/add-voucher.controller";
import { getVoucher } from "../../controllers/voucher/get-voucher.controller";
import { updateVoucher } from "../../controllers/voucher/update-voucher.controller";
import { deleteVoucher } from "../../controllers/voucher/delete-voucher.controller";

const router = express.Router();

router.get("/getvoucher",getVoucher).post("/addvoucher", addVoucher).put("/updatevoucher",updateVoucher).delete("/deletevoucher/:id",deleteVoucher);

export default router;
