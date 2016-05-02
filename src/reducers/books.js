import { books } from '../data/books';

function selectRelatedBooks(book) {
  return books.filter(b => b.id !== book.id && b.category_id === book.category_id);
}

export const SELECT_BOOK = 'books/SELECT_BOOK';
export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    book,
    releatedBooks: selectRelatedBooks(book)
  };
}

const defaultBook = books[0];
const initialState = {
  activeBook: defaultBook,
  list: books,
  releatedBooks: selectRelatedBooks(defaultBook)
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_BOOK:
      return {
        ...state,
        activeBook: action.book,
        releatedBooks: action.releatedBooks
      };

    default:
      return state;
  }
}
