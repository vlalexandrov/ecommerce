import Product from '../database/models/product.model';
import ProductInventory from '../database/models/product-inventory.model';

const updateInventory = async (productId: number, count: number): Promise<any> => {
  try {
    const product = await Product.findOne({
      where: { id: productId },
      include: [ProductInventory],
    });

    if (!product) {
      throw new Error("Product with specified ID doesn't exists");
    }

    const productInventoryId = product.productInventory.id;

    const productInInventory = await ProductInventory.findOne({
      where: { id: productInventoryId },
    });

    if (!productInInventory) {
      throw new Error("Product with specified ID doesn't exists in inventory");
    }

    const newCount =
      productInInventory.quantity + count > 0 ? productInInventory.quantity + count : 0;

    await productInInventory.update({
      quantity: newCount,
    });

    return productInInventory;
  } catch (e) {
    throw new Error(e);
  }
};

const getProductQuantityFromInventory = async (productId: number): Promise<number> => {
  try {
    const product = await ProductInventory.findOne({
      where: {
        id: productId,
      },
    });

    return product.quantity;
  } catch (e) {
    throw new Error(e);
  }
};

const getProductInventory = async (productId: number): Promise<ProductInventory> => {
  try {
    return await ProductInventory.findOne({
      where: {
        id: productId,
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};

export { updateInventory, getProductQuantityFromInventory, getProductInventory };
