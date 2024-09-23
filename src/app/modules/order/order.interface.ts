type TCustomerInfo = {
  name: string;
  email: string;
  number: string;
  address: string;
};

type TProduct = {
  quantity: any;
  _id: string;
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  price: number;
};

export type TOrder = {
  customerInfo: TCustomerInfo;
  grandTotal: number;
  items: number;
  paymentMethod: string;
  products: TProduct[];
  tax: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
};
