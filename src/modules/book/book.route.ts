//  src/modules/book/book.route.ts


import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/', BookController.create);
router.get('/', BookController.getAll);
router.get('/:bookId', BookController.getById);
router.put('/:bookId', BookController.update);
router.delete('/:bookId', BookController.delete);

export default router;
