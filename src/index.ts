import { AppDataSource } from "./config/data-source";
import bodyParser from "body-parser";
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "./constants";
import router from "./routes/index-routes";

const app = express();
const PORT = 5001;

AppDataSource.initialize()
  .then(async () => {
    console.log(`${SUCCESS_MESSAGES._SUCCESSFULLY("Database Conntected")}`);
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use("/", router);
  })
  .catch((error) => {
    console.log(
      `${ERROR_MESSAGES._InternalServerError("Database Not Connected")}`
    );
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
