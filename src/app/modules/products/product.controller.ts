import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  ProductDeleteFromDB,
  ProductUpdateIntoDB,
} from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await createProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product is created successfully ",
    data: result,
  });
});

const getALlProducts = catchAsync(async (req, res) => {
  const result = await getAllProductsFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products is retrieved successfully ",
    data: result,
  });
});

const getSingleProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleProductFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product is retrieved successfully ",
    data: result,
  });
});

const productUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductUpdateIntoDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product is updated successfully ",
    data: result,
  });
});

const productDelete = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductDeleteFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product is deleted successfully ",
    data: result,
  });
});

export {
  createProduct,
  getALlProducts,
  getSingleProductById,
  productUpdate,
  productDelete,
};
