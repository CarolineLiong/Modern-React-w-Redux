import axios from "axios";

const API_KEY = "d1b44c30025dc1df0e012c2fa63ee7e0";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

//fetchWeather is the action creator which returns an action
//the action always needs to have a type
//whenever fetchWeather is called, the city (a string) will also be passed along
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  //request is a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
//we return the promise (request) as the payload
