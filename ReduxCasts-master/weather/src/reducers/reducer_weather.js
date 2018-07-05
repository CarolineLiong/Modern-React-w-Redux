import { FETCH_WEATHER } from "../actions/index";
// ...state is the existing array - each time fetched_weather is called, add the new data onto it
// make sure you are returning a new instance of state and not mutating it by using state.push
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //[city, city, city...]
  }
  return state;
}
