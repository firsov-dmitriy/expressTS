import express, { Request, Response } from "express";
import mongoose from "mongoose";
import AuthRouter from "./auth/AuthRoute";
import PostRouter from "./post/PostRouter";
import UsersRouter from "./users/UsersRoute";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/api", PostRouter);
app.use(cookieParser());
app.use("/api", UsersRouter);
app.use("/api", AuthRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Server working");
});

async function startApp() {
  try {
    if (typeof process.env.DB_URL === "string") {
      mongoose.connect(process.env.DB_URL);
    }
    app.listen(process.env.PORT, () => {
      console.log("Server started " + process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
