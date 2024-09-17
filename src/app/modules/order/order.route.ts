import { Router } from "express";
// import validateRequest from "../../middleware/validateRequest";
import { createOrder } from "./order.controller";
// import { createOrderValidationSchema } from "./order.validation";

const orderRoutes = Router();

orderRoutes.post(
  "/create-order",
  //   validateRequest(createOrderValidationSchema),
  createOrder
);

export default orderRoutes;
