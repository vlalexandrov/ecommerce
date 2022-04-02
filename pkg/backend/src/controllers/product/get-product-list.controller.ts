import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getProductList } from '../../services/product.service';

async function getProductController(_req: Request, res: Response): Promise<void> {
  try {
    const productList = await getProductList();
    sendSuccessResponse(res, productList, 200);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getProductController;
