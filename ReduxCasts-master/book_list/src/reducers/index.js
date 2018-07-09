import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";
//this is the file where all the reducers come together
//mapping of our Application state which is composed of 2 reducers BookReducer and ActiveBook
//we assign what these reducers return as books and activebook
//rootReducer make books and activeBook keys in our global state (ie: use state.books, state.activeBooks)
//we use them in our containers 
// BooksReducer is the array of books from reducer_books.js

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
