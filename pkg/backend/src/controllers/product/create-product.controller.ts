import { Request, Response } from 'express';
import Product from '../../database/models/product.model';
import ProductAttributes from '../../database/models/product-attributes.model';
import ProductInventory from '../../database/models/product-inventory.model';

async function createProductController(req: Request, res: Response): Promise<void> {
  // const { name, desc, price } = req.body;

  try {
    const product = await Product.create(
      {
        name: 'test',
        desc: 'test',
        price: 200,
        sku: '123456',
        productAttributes: { size: 'XL', color: 'White', season: 'summer' },
        productInventory: { quantity: 100 },
      },
      {
        include: [ProductAttributes, ProductInventory],
      },
    );

    res.send({
      status: 200,
      product,
    });
  } catch (e) {
    console.log('Error', e);
  }
}

export default createProductController;
