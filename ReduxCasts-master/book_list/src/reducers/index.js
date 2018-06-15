import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

//mapping of our state: BooksReducer is the array of books from reducer_books.js
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
