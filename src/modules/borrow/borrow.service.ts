//  src/modules/borrow/borrow.service.ts


import { Borrow } from './borrow.model';
import { Book } from '../book/book.model';

export const BorrowService = {


  borrowBook: async (data: any) => {
    const book = await Book.findById(data.book);
    if (!book || book.copies < data.quantity) {
      throw new Error('Not enough copies available');
    }

    book.copies -= data.quantity;
    book.available = book.copies > 0;
    await book.save();

    return Borrow.create(data);
  },

  getSummary: async () => {
    return Borrow.aggregate([
      {
        $group: {
          _id: '$book',
          totalQuantity: { $sum: '$quantity' },
        },
      },
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: '_id',
          as: 'bookDetails',
        },
      },
      { $unwind: '$bookDetails' },
      {
        $project: {
          _id: 0,
          book: {
            title: '$bookDetails.title',
            isbn: '$bookDetails.isbn',
          },
          totalQuantity: 1,
        },
      },
    ]);
  },
};
