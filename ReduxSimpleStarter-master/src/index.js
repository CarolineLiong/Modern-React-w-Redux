
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAEy8jNOTRXZFssIAbQs96MDUKlgNggSKY';

// Create a new component. This component should produce some HTML

//const is a ES6 piece of synthax -declaring a variable (the final variable that shouldn't change
// therefore a const - never going to reassign App)
//HTML in return statement is JSX  - looks like HTML but its Javascript


//this is a component class, not instance
//const App = function(){
//    return <div>Hi!</div>;
//}

//this is equivalent to the function above => equals function()
//this is a functional component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
// create an instance of App by writing <App></App> or simply <App />
// render App onto the page through container in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
