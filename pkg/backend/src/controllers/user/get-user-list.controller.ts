import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../../services/response.service';
import { getUserList } from '../../services/user.service';

async function getUserListController(req: Request, res: Response): Promise<void> {
  try {
    const users = await getUserList();

    if (!users) {
      sendErrorResponse(res, 'No users found');
      return;
    }

    sendSuccessResponse(res, users, 200);
  } catch (e) {
    sendErrorResponse(res, e.message);
  }
}

export default getUserListController;
