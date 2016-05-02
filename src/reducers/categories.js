import { categories } from '../data/categories';
import { books } from '../data/books';

function selectBooksByCategoryId(id) {
  return books.filter((book) => book.category_id === id);
}

export const SELECT_CATEGORY = 'categories/SELECT_CATEGORY';
export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
    books: selectBooksByCategoryId(category.id)
  };
}

const defaultCategory = categories[0];
const initialState = {
  activeCategory: defaultCategory,
  list: categories,
  books: selectBooksByCategoryId(defaultCategory.id)
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        activeCategory: action.category,
        books: action.books
      };

    default:
      return state;
  }
}
