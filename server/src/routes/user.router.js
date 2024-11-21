import { Router } from "express";
import { handleReview } from "../controllers/users.controller.js";

const userRouter = new Router({});

userRouter.post("/review/:id", handleReview);

export default userRouter;
