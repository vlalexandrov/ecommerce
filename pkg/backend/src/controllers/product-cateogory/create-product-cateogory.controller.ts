import { Request, Response } from 'express';
import ProductCategory from '../../database/models/product-category.model';

async function createProductCategoryController(req: Request, res: Response): Promise<void> {
  // const { name, desc, price } = req.body;
  // console.log('name', name);
  // console.log('desc', desc);
  // console.log('price', price);

  try {
    await ProductCategory.create({
      name: 'test',
      desc: 'test',
    });

    res.send(200);
  } catch (e) {
    console.log('Error', e);
  }
}

export default createProductCategoryController;
