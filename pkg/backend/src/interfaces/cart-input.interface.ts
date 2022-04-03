export interface CartInput {
  userId: number;
  products: {
    productId: number;
    quantity: number;
  }[];
}
