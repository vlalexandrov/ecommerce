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
      const cartId = existingCart.get().id;
      await existingCart.set({
        userId,
        total: cartTotal,
      });

      // Deleting items
      if (existingCart.cartItems.length > products.length) {
        for (const productInDb of existingCart.cartItems) {
          // Order item contains product that not exists in request
          const sameProductInRequest = products.find(
            product => product.productId === productInDb.productId,
          );

          if (!sameProductInRequest) {
            await CartItem.destroy({
              where: {
                cartId,
                productId: productInDb.productId,
              },
            });
          }
        }
      }

      // Creating & updating items
      for (const product of products) {
        const cartItemExists = existingCart.cartItems.find(
          cartItem => cartItem.productId === product.productId,
        );
        if (cartItemExists) {
          // Update existing cart item
          await cartItemExists.update({
            productId: product.productId,
            quantity: product.quantity,
          });
        } else {
          // Add a new item to the cart
          await CartItem.create({
            cartId,
            productId: product.productId,
            quantity: product.quantity,
          });
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
