import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "../node_modules/dotenv/lib/main.js";
import authRouter from "./routes/auth.routes.js";
import facultiesRouter from "./routes/faculties.router.js";
import userRouter from "./routes/user.router.js";
configDotenv();

const app = express();

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.options("*", cors());

app.use(express.json());

app.use("/auth", authRouter);
app.use("/faculties", facultiesRouter);
app.use("/user", userRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected.");

    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error occured while connecting to MongoDB: ", err);
  });
