import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

//this is the reducer we made
import PostsReducer from "./reducer_posts";


//assign the reducers we made to the keys 
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
