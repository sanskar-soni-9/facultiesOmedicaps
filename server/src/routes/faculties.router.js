import { Router } from "express";
import { getFaculties } from "../utils/faculties.utils.js";

const facultiesRouter = new Router({});

facultiesRouter.get("/", getFaculties);
facultiesRouter.get("/:id");

export default facultiesRouter;
