import { z } from "zod";

const customerInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  number: z.string().min(1, "Number is required"),
  address: z.string().min(1, "Address is required"),
});

const productSchema = z.object({
  _id: z.string().min(1, "Product ID is required"),
  name: z.string().min(1, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  stockQuantity: z.number().min(0, "Stock quantity cannot be negative"),
  brand: z.string().min(1, "Brand is required"),
  price: z.number().min(0, "Price cannot be negative"),
});

const createOrderValidationSchema = z.object({
  customerInfo: customerInfoSchema,
  grandTotal: z.number().min(0, "Grand total must be a positive number"),
  items: z.number().min(1, "There must be at least one item"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  products: z.array(productSchema).min(1, "At least one product is required"),
  tax: z.number().min(0, "Tax must be a positive number"),
  totalPrice: z.number().min(0, "Total price must be a positive number"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export { createOrderValidationSchema };
