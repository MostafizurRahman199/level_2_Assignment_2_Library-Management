
// ✅ src/routes/index.ts

import express from 'express';
import bookRoutes from '../modules/book/book.route';
import borrowRoutes from '../modules/borrow/borrow.route';

const router = express.Router();

router.use('/books', bookRoutes);
router.use('/borrow', borrowRoutes);

export default router;