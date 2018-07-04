export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  //payload = piece of data that the action is being undertaken
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
