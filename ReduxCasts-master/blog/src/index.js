import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//BrowserRouter interacts w/ the history library and decides exactly what to do based on a change in side the URL
//Route is a react component that can be put into any other react component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

//make redux promise our middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Route must always have a path and component
//if I go to this URL/path, show this particular component
//Use Switch imponent to choose between the different routes
//put most specific routes at the top of the list of switch children
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
