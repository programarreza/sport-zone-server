import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    customerInfo: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      number: { type: String, required: true },
      address: { type: String, required: true },
    },
    grandTotal: { type: Number, required: true },
    items: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    products: [
      {
        _id: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
        name: { type: String, required: true },
        category: { type: String, required: true },
        stockQuantity: { type: Number, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    tax: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Order = model<TOrder>("Order", orderSchema);
