import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
// import { CartInput } from '../../interfaces/cart-input.interface';

async function createOrUpdateCartController(req: Request, res: Response): Promise<void> {
  // const userCart = req.body as CartInput;

  try {
    // const product = await createProduct(productDTO);
    sendSuccessResponse(res, '', 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default createOrUpdateCartController;
