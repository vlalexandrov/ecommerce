import { closeCartById, getCart } from './cart.service';
import { getProductInventory } from './inventory.service';
import { getProduct } from './product.service';
import Order from '../database/models/order.model';
import OrderItem from '../database/models/order-item';

const placeOrder = async (cartId): Promise<Order> => {
  try {
    // Get cart with cart items
    const cart = await getCart(cartId);
    if (!cart) {
      throw new Error("Cart with specified ID doesn't exist");
    }

    if (cart.closed) {
      throw new Error('Cart is already closed!');
    }

    // Close cart
    await closeCartById(cartId);

    // Update inventory
    for (const cartItem of cart.cartItems) {
      const product = await getProduct(cartItem.productId);
      const productInventory = await getProductInventory(cartItem.productId);

      if (product.quantity < cartItem.quantity) {
        throw new Error(
          `Not enough quantity in the inventory for the product with ID ${cartItem.productId}`,
        );
      }

      await productInventory.update({
        quantity: productInventory.quantity - cartItem.quantity,
      });
    }

    return await Order.create(
      {
        userId: parseInt(cart.userId),
        total: cart.total,
        orderItems: cart.cartItems,
      },
      {
        include: [OrderItem],
      },
    );
  } catch (e) {
    throw new Error(e);
  }
};

export { placeOrder };
