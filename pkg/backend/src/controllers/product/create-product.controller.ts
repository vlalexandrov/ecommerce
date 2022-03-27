import { Request, Response } from 'express';

async function createProductController(req: Request, res: Response): Promise<void> {
  // const { name, desc, price } = req.body;
  // console.log('name', name);
  // console.log('desc', desc);
  // console.log('price', price);

  res.send('how are you?');
}

export default createProductController;
