import { CartInput } from '../interfaces/cart-input.interface';
import Cart from '../database/models/cart.model';
import Product from '../database/models/product.model';
import CartItem from '../database/models/cart-item.model';

const createOrUpdateCart = async (cart: CartInput): Promise<any> => {
  // console.log('cart Input', cart);
  const { userId, products } = cart;
  const productWithPrices = [];
  let cartTotal = 0;

  try {
    for (const product of products) {
      // Get product
      const productRecord = await Product.findOne({
        where: {
          id: product.productId,
        },
      });

      // Generate new array with product prices
      productWithPrices.push({
        id: product.productId,
        quantity: product.quantity,
        price: productRecord.price,
      });

      cartTotal += product.quantity * productRecord.price;
    }

    // Check if user has an existing cart
    const existingCart = await Cart.findOne({
      where: {
        userId,
        closed: false,
      },
    });

    if (existingCart) {
      console.log('------ CART EXISTS ------');
    } else {
      // Create a new Cart
      const newCart = await Cart.create(
        {
          userId,
          total: cartTotal,
          cartItems: products,
        },
        {
          include: [CartItem],
        },
      );

      return newCart;
    }
  } catch (e) {
    throw new Error(e);
  }
};

export { createOrUpdateCart };
