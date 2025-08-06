// src/modules/book/book.model.ts

import mongoose, { Schema, Document } from 'mongoose';

export enum Genre {
  FICTION = 'FICTION',
  NON_FICTION = 'NON_FICTION',
  SCIENCE = 'SCIENCE',
  HISTORY = 'HISTORY',
  BIOGRAPHY = 'BIOGRAPHY',
  FANTASY = 'FANTASY'
}

export interface IBook extends Document {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}



const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: Object.values(Genre), required: true },
    isbn: { type: String, unique: true, required: true },
    description: String,
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);


bookSchema.set('toJSON', {
  transform: function (doc, ret) {
    
    const obj = ret as any;
    delete obj.__v;
    return obj;
  },
});




//  Instance method - for explicit check
bookSchema.methods.checkAvailability = function () {
  if (this.copies <= 0) this.available = false;
};



// Middleware - for auto-check during save

bookSchema.pre('save', function (next) {
    this.available = this.copies > 0;
    next();
  });

  

export const Book = mongoose.model<IBook>('Book', bookSchema);
