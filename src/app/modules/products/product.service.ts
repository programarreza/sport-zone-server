import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

type Query = Partial<{
  name: { $regex: RegExp };
}>;

const createProductIntoDB = async (payload: TProduct) => {
  const productExist = await Product.findOne({ name: payload.name });
  if (productExist) {
    throw new AppError(httpStatus.CONFLICT, "Product already exist!");
  }

  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (name: string) => {
  const query: Query = {};
  if (name) {
    query.name = { $regex: new RegExp(name, "i") };
  }

  const result = await Product.find(query);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const productExist = await Product.findById(id);
  if (!productExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }

  const result = await Product.findById(id);
  return result;
};

const ProductUpdateIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const productExist = await Product.findById(id);
  if (!productExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }

  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const ProductDeleteFromDB = async (id: string) => {
  const productExist = await Product.findById(id);
  if (!productExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }

  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

export {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  ProductUpdateIntoDB,
  ProductDeleteFromDB,
};
