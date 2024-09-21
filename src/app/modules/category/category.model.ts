import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      enum: [
        "football",
        "basketball",
        "baseball",
        "protectiveGear",
        "surfing",
        "badminton",
        "tennis",
        "helmets",
      ],
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = model("Category", categorySchema);
