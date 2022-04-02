import { Response } from 'express';

enum RESPONSE_TYPE {
  SUCCESS = 'success',
  ERROR = 'error',
}

const dataKeyMap = new Map([
  [RESPONSE_TYPE.SUCCESS, 'data'],
  [RESPONSE_TYPE.ERROR, 'message'],
]);

function sendResponse(res: Response, type: RESPONSE_TYPE, data: any, code = 200): void {
  const validatedType = dataKeyMap.has(type) ? type : RESPONSE_TYPE.SUCCESS;

  res.status(code).json({
    type: validatedType,
    [dataKeyMap.get(validatedType)]: data,
  });
}

function sendSuccessResponse(res: Response, data: any, code = 200): void {
  sendResponse(res, RESPONSE_TYPE.SUCCESS, data, code);
}

function sendErrorResponse(res: Response, data: any, code = 400): void {
  sendResponse(res, RESPONSE_TYPE.ERROR, data, code);
}

export { sendResponse, sendSuccessResponse, sendErrorResponse };
