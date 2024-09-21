import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { Category } from "./category.model";

const getCategoriesFromDB = async () => {
  const result = await Category.find();
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Categories not found!");
  }

  return result;
};

export { getCategoriesFromDB };
