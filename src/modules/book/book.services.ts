//  src/modules/book/book.service.ts


import { Book } from './book.model';

export const BookService = {


  create: async (data: any) => await Book.create(data),

  findAll: async (query: any) => {

    const filter: any = {};
    
    if (query.filter) filter.genre = query.filter;
    const sort = query.sort === 'asc' ? 1 : -1;
    const limit = parseInt(query.limit) || 10;

    return Book.find(filter)
      .sort({ [query.sortBy || 'createdAt']: sort })
      .limit(limit);
  },

  findById: async (id: string) => await Book.findById(id),

  update: async (id: string, data: any) => await Book.findByIdAndUpdate(id, data, { new: true }),

  delete: async (id: string) => await Book.findByIdAndDelete(id),
};