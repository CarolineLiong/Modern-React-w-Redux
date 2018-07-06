import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

//state is the previous state
//the default state is an object, the action is one of the 3
//for FETCH_POST, we may have already have some number of posts fetched and stored inside of this reducer
//we don't want to throw it away - so we keep them by using ...state
//basically, fetch the objects from the original state and put them into this new one that's being returned
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST
      //look at the state object, it has a key of posts id (the action.payload), just drop it
      //it returns a new state object with that post not present in the state anymore 
      return _.omit(state, action.payload);
    case FETCH_POST:
      //const post = action.payload.data;
      //const newState = {...state };
      //newState[post.id] = post;
      //return newState
      // is the same as below
      //the [action.payload.data.id] is key interpolation, not making an array
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
