import { Router } from "express";
import { getCategories } from "./category.controller";

const categoryRoute = Router();

categoryRoute.get("/", getCategories);

export default categoryRoute;
