import { combineReducers } from 'redux';
import BooksReducer from './books';
import CategoryReducer from './categories';

const rootReducer = combineReducers({
  books: BooksReducer,
  categories: CategoryReducer
});

export default rootReducer;
