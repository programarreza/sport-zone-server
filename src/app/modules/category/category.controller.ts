import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { getCategoriesFromDB } from "./category.service";

const getCategories = catchAsync(async (req, res) => {
  const result = await getCategoriesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Categories is retrieved successfully ",
    data: result,
  });
});

export { getCategories };
