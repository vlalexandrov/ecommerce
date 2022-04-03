export interface CartInput {
  userId: number;
  products: {
    id: number;
    quantity: number;
  }[];
}
