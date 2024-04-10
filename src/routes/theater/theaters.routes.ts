import express from "express";
import { addTheater } from "../../controllers/theaters/add-theater.controller";
import { deleteTheater } from "../../controllers/theaters/delete-theater.controller";
import { updateTheater } from "../../controllers/theaters/update-theater.controller";
import { getTheater } from "../../controllers/theaters/get-theater.controller";

const router = express.Router();

router
  .get("/get", getTheater)
  .post("/addtheater", addTheater)
  .put("/update", updateTheater)
  .delete("/delete/:id", deleteTheater);

export default router;
