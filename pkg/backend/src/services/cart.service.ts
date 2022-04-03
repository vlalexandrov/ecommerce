import { CartInput } from '../interfaces/cart-input.interface';

const createOrUpdateCart = async (cart: CartInput): Promise<any> => {
  console.log('cart Input', cart);

  try {
    return true;
    // return await Product.create(productDTO, {
    //   include: [ProductAttributes, ProductInventory],
    // });
  } catch (e) {
    throw new Error(e);
  }
};

export { createOrUpdateCart };
