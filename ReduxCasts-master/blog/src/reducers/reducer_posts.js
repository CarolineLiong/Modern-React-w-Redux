import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

//state is the previous state
//the default state is an object, the action is one of the 3 above
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
