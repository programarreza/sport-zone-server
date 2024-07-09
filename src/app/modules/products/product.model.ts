import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";
import { Category } from "./product.constant";

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      enum: {
        values: Category,
        message: "{VALUE} in not a valid category",
      },
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = model<TProduct>("Product", productSchema);
