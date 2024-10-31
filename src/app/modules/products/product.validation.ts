import { z } from "zod";
import { categoryList } from "../category/category.constant";

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    category: z.enum([...categoryList] as [string, ...string[]]),
    stockQuantity: z.number().optional(),
    brand: z.string(),
    rating: z.number().optional(),
    description: z.string(),
    price: z.number().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    category: z.enum([...categoryList] as [string, ...string[]]).optional(),
    stockQuantity: z.number().optional(),
    brand: z.string().optional(),
    rating: z.number().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export { createProductValidationSchema, updateProductValidationSchema };
