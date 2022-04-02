import { Request, Response } from 'express';
import { IProduct } from '../../interfaces/product.interface';
import { createProduct } from '../../services/product.service';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';

async function createProductController(req: Request, res: Response): Promise<void> {
  const productDTO = req.body as IProduct;

  try {
    const product = await createProduct(productDTO);
    sendSuccessResponse(res, product, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default createProductController;
