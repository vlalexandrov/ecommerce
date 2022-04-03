import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getProduct } from '../../services/product.service';

async function getProductController(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);
  if (!id || isNaN(id)) {
    sendErrorResponse(res, 'No product ID specified');
    return;
  }

  try {
    const product = await getProduct(id);

    if (!product) {
      sendErrorResponse(res, 'No product found with this ID');
      return;
    }

    sendSuccessResponse(res, product, 200);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getProductController;
