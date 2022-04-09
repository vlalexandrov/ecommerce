import { closeCartById, getCart } from './cart.service';
import { getProductInventory } from './inventory.service';
import { getProduct } from './product.service';

const placeOrder = async (cartId): Promise<any> => {
  try {
    // Get cart with cart items
    const cart = await getCart(cartId);
    if (!cart) {
      throw new Error("Cart with specified ID doesn't exist");
    }

    // Close cart
    await closeCartById(cartId);

    // Check and update inventory
    for (const cartItem of cart.cartItems) {
      const product = await getProduct(cartItem.productId);
      const productInventory = await getProductInventory(cartItem.productId);

      console.log('productInventory', productInventory);

      if (product.quantity < cartItem.quantity) {
        throw new Error(
          `Not enough quantity in the inventory for the product with ID ${cartItem.productId}`,
        );
      }

      await productInventory.update({
        quantity: productInventory.quantity - cartItem.quantity,
      });
    }
  } catch (e) {
    throw new Error(e);
  }
};

export { placeOrder };
