import { z } from "zod";
import { Category } from "./product.constant";

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    category: z.enum([...Category] as [string, ...string[]]),
    stockQuantity: z.number().optional(),
    brand: z.string(),
    rating: z.number().optional(),
    description: z.string(),
    price: z.number().optional(),
    image: z.string(),
    isDeleted: z.boolean().optional(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    category: z.enum([...Category] as [string, ...string[]]).optional(),
    stockQuantity: z.number().optional(),
    brand: z.string().optional(),
    rating: z.number().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export { createProductValidationSchema, updateProductValidationSchema };
