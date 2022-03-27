import { Request, Response } from 'express';
import Product from '../../database/models/product.model';

async function createProductController(req: Request, res: Response): Promise<void> {
  // const { name, desc, price } = req.body;
  // console.log('name', name);
  // console.log('desc', desc);
  // console.log('price', price);

  try {
    const product = new Product({ name: 'test', desc: 'test', price: 200 });
    await product.save();
  } catch (e) {
    console.log('Error', e);
  }

  res.send('hey man!');
}

export default createProductController;
