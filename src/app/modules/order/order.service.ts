/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { Product } from "../products/product.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // step-1: create the order
    const order = await Order.create([payload], { session });

    // step-2: update stock quantities for each product in the order
    const updateStock = payload.products.map(async (product) => {
      return Product.findByIdAndUpdate(
        product._id,
        { $inc: { stockQuantity: -product.quantity } },
        { session, new: true }
      );
    });

    await Promise.all(updateStock);

    await session.commitTransaction();
    await session.endSession();

    return order;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    throw new Error(`Order creation failed: ${error?.message}`);
  }
};

export { createOrderIntoDB };
