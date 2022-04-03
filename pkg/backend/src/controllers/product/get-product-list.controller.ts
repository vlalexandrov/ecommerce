import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getProductList } from '../../services/product.service';
// import { stringify } from 'querystring';

/*
 * This endpoint returns a list of all products available in the inventory.
 * Products must be returned 10 at a time, pagination is available.
 * Only initial product information returns.
 */
async function getProductListController(req: Request, res: Response): Promise<void> {
  const offset = req.query.offset || 0;

  try {
    const { products, count } = await getProductList(offset as number);

    console.info('ROWS COUNT', count);
    sendSuccessResponse(res, products, 200);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getProductListController;
