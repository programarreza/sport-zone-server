import { NextFunction, Request, Response, Router } from "express";
import { multerUpload } from "../../config/multer.config";
import validateRequest from "../../middleware/validateRequest";
import {
  createProduct,
  getALlProducts,
  getSingleProductById,
  productDelete,
  productUpdate,
} from "./product.controller";
import {
  createProductValidationSchema,
  updateProductValidationSchema,
} from "./product.validation";

const productRoutes = Router();

productRoutes.post(
  "/create-product",
  multerUpload.single("image"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createProductValidationSchema),
  createProduct
);

productRoutes.get("/", getALlProducts);
productRoutes.get("/:id", getSingleProductById);
productRoutes.patch(
  "/:id",
  multerUpload.single("image"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(updateProductValidationSchema),
  productUpdate
);

productRoutes.delete("/:id", productDelete);

export default productRoutes;
