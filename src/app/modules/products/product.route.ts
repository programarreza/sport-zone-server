import { Router } from "express";
import {
  createProduct,
  getALlProducts,
  getSingleProductById,
  productUpdate,
} from "./product.controller";
import validateRequest from "../../middleware/validateRequest";
import {
  createProductValidationSchema,
  updateProductValidationSchema,
} from "./product.validation";

const productRoutes = Router();

productRoutes.post(
  "/create-product",
  validateRequest(createProductValidationSchema),
  createProduct
);

productRoutes.get("/", getALlProducts);
productRoutes.get("/:id", getSingleProductById);
productRoutes.patch(
  "/:id",
  validateRequest(updateProductValidationSchema),
  productUpdate
);

export default productRoutes;
