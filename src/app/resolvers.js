import Book from "./models/Book";

export default {
  Query: {
    book: async (_, { isbn }) => {
      const book = await Book.findOne({ isbn });

      if (!book) {
        return {};
      }

      return book;
    },
    books: () => Book.find(),
  },

  Mutation: {
    createBook: (_, { data }) => Book.create(data),

    updateBook: async (_, { isbn, data }) => {
      const book = await Book.findOne({ isbn });

      if (!book) {
        return false;
      }

      await book.updateOne(data);

      return true;
    },

    deleteBook: async (_, { isbn }) => {
      const book = await Book.findOne({ isbn });

      if (!book) {
        return false;
      }

      await book.deleteOne();

      return true;
    },
  },
};
