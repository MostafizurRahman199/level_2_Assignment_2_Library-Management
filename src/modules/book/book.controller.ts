//  src/modules/book/book.controller.ts


import { Request, Response, NextFunction } from 'express';
import { BookService } from './book.services';
import sendResponse from '../../utils/sendResponse';



export const BookController = {
    
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await BookService.create(req.body);
      sendResponse(res, { success: true, message: 'Book created successfully', data: book });
    } catch (err) { next(err); }
  },

  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const books = await BookService.findAll(req.query);
      sendResponse(res, { success: true, message: 'Books retrieved successfully', data: books });
    } catch (err) { next(err); }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await BookService.findById(req.params.bookId);
      sendResponse(res, { success: true, message: 'Book retrieved successfully', data: book });
    } catch (err) { next(err); }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await BookService.update(req.params.bookId, req.body);
      sendResponse(res, { success: true, message: 'Book updated successfully', data: book });
    } catch (err) { next(err); }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await BookService.delete(req.params.bookId);
      sendResponse(res, { success: true, message: 'Book deleted successfully', data: null });
    } catch (err) { next(err); }
  },
};
