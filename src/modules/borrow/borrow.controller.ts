// src/modules/borrow/borrow.controller.ts

import { Request, Response, NextFunction } from 'express';
import { BorrowService } from './borrow.service';
import sendResponse from '../../utils/sendResponse';

export const BorrowController = {
  borrow: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await BorrowService.borrowBook(req.body);
      sendResponse(res, { success: true, message: 'Book borrowed successfully', data: result });
    } catch (err) { next(err); }
  },

  summary: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await BorrowService.getSummary();
      sendResponse(res, { success: true, message: 'Borrowed books summary retrieved successfully', data: result });
    } catch (err) { next(err); }
  },
};