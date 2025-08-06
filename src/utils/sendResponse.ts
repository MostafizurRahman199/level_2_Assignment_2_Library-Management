
//  src/utils/sendResponse.ts

import { Response } from 'express';

const sendResponse = <T>(res: Response, payload: {
  success: boolean;
  message: string;
  data: T;
}) => {
  res.json(payload);
};

export default sendResponse;
