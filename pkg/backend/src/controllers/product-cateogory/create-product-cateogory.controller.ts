import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { IProductCategory } from '../../interfaces/product-category.interface';
import { createCategory } from '../../services/product-category.service';

async function createProductCategoryController(req: Request, res: Response): Promise<void> {
  const categoryDto = req.body as IProductCategory;

  try {
    const category = await createCategory(categoryDto);
    sendSuccessResponse(res, category, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default createProductCategoryController;
