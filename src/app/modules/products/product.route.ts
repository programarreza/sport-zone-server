import { Router } from "express";
import { createProduct, getALlProducts } from "./product.controller";
import validateRequest from "../../middleware/validateRequest";
import { createProductValidationSchema } from "./product.validation";

const productRoutes = Router();

productRoutes.post(
  "/create-product",
  validateRequest(createProductValidationSchema),
  createProduct
);

productRoutes.get("/", getALlProducts);

export default productRoutes;
