import express, { Request, Response } from "express";
import mongoose from "mongoose";
import PostRouter from "./post/PostRouter";
import UsersRouter from "./users/UsersRoute";

const app = express();

const PORT = 5000;
const DB_URL =
  "mongodb+srv://admin:admin@cluster0.l6tax.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use("/api", PostRouter);
app.use("/api", UsersRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Server working");
});

async function startApp() {
  try {
    mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log("Server started " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
