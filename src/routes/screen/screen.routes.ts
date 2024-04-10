import express from "express";
import { addScreen } from "../../controllers/screens/add-screen.controller";
import { getScreen } from "../../controllers/screens/get-screen.controller";
import { updateScreen } from "../../controllers/screens/update-screen.controller";
import { deleteScreen } from "../../controllers/screens/delete-screen.controller copy 3";

const router = express.Router();

router
  .get("/get", getScreen)
  .post("/addscreen", addScreen)
  .put("/update", updateScreen)
  .delete("/delete/:id", deleteScreen);

export default router;
