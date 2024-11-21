import { Router } from "express";
import { handleGetFaculties } from "../controllers/faculties.controller.js";

const facultiesRouter = new Router({});

facultiesRouter.get("/", handleGetFaculties);
// facultiesRouter.get("/:id");

export default facultiesRouter;
