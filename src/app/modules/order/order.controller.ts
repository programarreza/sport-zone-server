import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createOrderIntoDB } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
  const result = await createOrderIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order is created successfully ",
    data: result,
  });
});

export { createOrder };
