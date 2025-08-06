//  src/middlewares/errorHandler.ts

import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(500).json({
    message: 'Validation failed',
    success: false,
    error: err,
  });
};