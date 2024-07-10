import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createProductIntoDB, getAllProductsFromDB } from "./product.service";

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
  const result = await getAllProductsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products is retrieved successfully ",
    data: result,
  });
});

export { createProduct, getALlProducts };
