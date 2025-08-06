
// src/modules/borrow/borrow.route.ts


import express from 'express';
import { BorrowController } from './borrow.controller';

const router = express.Router();

router.post('/', BorrowController.borrow);
router.get('/', BorrowController.summary);

export default router;
