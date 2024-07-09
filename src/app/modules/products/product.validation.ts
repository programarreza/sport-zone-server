import { z } from "zod";
import { Category } from "./product.constant";

const createProductValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    admin: z.object({
      name: z.string(),
      category: z.enum([...Category] as [string, ...string[]]),
      stockQuantity: z.number(),
      brand: z.string(),
      rating: z.number(),
      description: z.string(),
      price: z.number(),
      image: z.string(),
    }),
  }),
});

export { createProductValidationSchema };
