import { closeCartById, getCart } from './cart.service';
import { getProductInventory } from './inventory.service';
import { getProduct } from './product.service';
import Order from '../database/models/order.model';
import OrderItem from '../database/models/order-item';
import { IOrderItemCreate } from '../interfaces/order-item.interface';
import { Op } from 'sequelize';

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

    const orderItems: IOrderItemCreate[] = [];

    // Update inventory
    for (const cartItem of cart.cartItems) {
      const { productId, quantity } = cartItem;

      const product = await getProduct(productId);
      const productInventory = await getProductInventory(productId);

      if (product.quantity < quantity) {
        throw new Error(
          `Not enough quantity in the inventory for the product with ID ${productId}`,
        );
      }

      await productInventory.update({
        quantity: productInventory.quantity - quantity,
      });

      orderItems.push({
        productId,
        quantity,
        price: product.price,
      });
    }

    return await Order.create(
      {
        userId: parseInt(cart.userId),
        total: cart.total,
        orderItems,
      },
      {
        include: [OrderItem],
      },
    );
  } catch (e) {
    throw new Error(e);
  }
};

const getOrderById = async (id: number): Promise<Order> => {
  return await Order.findOne({
    where: {
      id,
    },
    include: [OrderItem],
  });
};

const getOrderHistoryByProductId = async (id: number): Promise<Order[]> => {
  const orderIds = [];

  const orderItems = await OrderItem.findAll({
    where: {
      productId: id,
    },
  });

  for (const item of orderItems) {
    orderIds.push(item.orderId);
  }

  return await Order.findAll({
    where: {
      id: { [Op.in]: orderIds },
    },
    include: [OrderItem],
  });
};

export { placeOrder, getOrderById, getOrderHistoryByProductId };
