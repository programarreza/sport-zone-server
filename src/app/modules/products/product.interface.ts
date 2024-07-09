export type TCategory =
  | "hiking boots"
  | "basketball"
  | "tennis"
  | "bags & backpacks"
  | "football";

export type TProduct = {
  name: string;
  category: TCategory;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
};
