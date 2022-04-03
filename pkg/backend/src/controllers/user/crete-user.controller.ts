import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { IUser } from '../../interfaces/user.interface';
import { createUser } from '../../services/user.service';

async function createUserController(req: Request, res: Response): Promise<void> {
  const userDto = req.body as IUser;

  try {
    const user = await createUser(userDto);
    sendSuccessResponse(res, user, 201);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default createUserController;
