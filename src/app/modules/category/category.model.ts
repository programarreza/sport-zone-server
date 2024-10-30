import { model, Schema } from "mongoose";
import { categoryList } from "./category.constant";

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      enum: categoryList,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = model("Category", categorySchema);
