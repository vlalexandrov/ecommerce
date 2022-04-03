import { CartInput } from '../interfaces/cart-input.interface';
import Cart from '../database/models/cart.model';
import Product from '../database/models/product.model';
import CartItem from '../database/models/cart-item.model';
import { Op } from 'sequelize';

const createOrUpdateCart = async (cart: CartInput): Promise<any> => {
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
        closed: {
          [Op.is]: null,
        },
      },
      include: [CartItem],
    });

    if (existingCart) {
      await existingCart.set({
        userId,
        total: cartTotal,
      });

      for (const product of products) {
        const cartItemExists = existingCart.cartItems.find(
          cartItem => cartItem.productId === product.productId,
        );
        if (cartItemExists) {
          await cartItemExists.update({
            productId: product.productId,
            quantity: product.quantity,
          });
        } else {
          //TODO: Fix here. Not working
          await existingCart.update('cartItems', [
            {
              productId: product.productId,
              quantity: product.quantity,
            },
          ]);
        }
      }
    } else {
      // Create a new Cart
      return await Cart.create(
        {
          userId,
          total: cartTotal,
          cartItems: products,
        },
        {
          include: [CartItem],
        },
      );
    }
  } catch (e) {
    throw new Error(e);
  }
};

export { createOrUpdateCart };
