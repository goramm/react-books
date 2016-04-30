import { books } from '../data/books';

export const SELECT_BOOK = 'books/SELECT_BOOK';
export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    book,
  };
}

const initialState = {
  activeBook: books[0],
  list: books
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_BOOK:
      return {
        ...state,
        activeBook: action.book,
      };

    default:
      return state;
  }
}
