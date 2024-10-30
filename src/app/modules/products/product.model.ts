import { model, Schema } from "mongoose";
import { categoryList } from "../category/category.constant";
import { TProduct } from "./product.interface";

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
        values: categoryList,
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
      default: 0,
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// filter out deleted documents
productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const Product = model<TProduct>("Product", productSchema);
