import { Request, Response } from 'express';
import Product from '../../database/models/product.model';

async function createProductController(req: Request, res: Response): Promise<void> {
  // const { name, desc, price } = req.body;
  // console.log('name', name);
  // console.log('desc', desc);
  // console.log('price', price);

  try {
    await Product.create({
      name: 'test',
      desc: 'test',
      price: 200,
      sku: '123456',
      productAttributes: { size: 'XL', color: 'White', season: 'summer' },
    });

    res.send(200);
  } catch (e) {
    console.log('Error', e);
  }
}

export default createProductController;
