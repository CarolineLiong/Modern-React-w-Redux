//lecture 125
import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
// ?key is a query key
const API_KEY = "?key=PAPERCLIP1234";

//purpose of this action creator is to fetch a list of posts from the api and return an action object called FETCH_POSTS
//with the payload as the request
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
//values will contain the title, categories, and context
//
export function createPost(values, callback) {

  //we'll make a post type request to our api using URL (1st parameter), and our values (2nd parameter)
  //callback function - called after the new post is made
  //(it'll be the navigation back to the front page in posts_new.js)
  //use .then(() => callback()) to navigate back to the root page after the post has been successfully deleted 
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  //return the action
  return {
    type: CREATE_POST,
    payload: request
  };
}

//
export function fetchPost(id) {
  //api request for the post we want - from reduxblog.kerokuapp.com
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  //return the action
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  //the action will just return the id being deleted, app gets rid of it in the reducer
  return {
    type: DELETE_POST,
    payload: id
  };
}
