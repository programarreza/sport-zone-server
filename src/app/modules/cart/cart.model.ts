import { model, Schema } from "mongoose";
import { Category } from "../products/product.constant";

const cartSchema = new Schema<TProduct>(
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
// productSchema.pre("find", function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// productSchema.pre("findOne", function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// productSchema.pre("aggregate", function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });

export const Cart = model<TProduct>("Cart", cartSchema);
