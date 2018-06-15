//need to use React to convert JSX code
import React, { Component } from 'react';

//define the component (this is a functional component)
//const SearchBar = () => {
//  return <input />;
//};

//create a class component
// a class component must always have a render method
class SearchBar extends Component {
  //this is how we predefine a state in a class component (only class components, not function have states)
  constructor(props){
    super(props);

    //initialize the state: the search term is at first an empty string
    this.state= { term: ''}
  }
  render() {
    //create a new input element with property onChange (an event handler called onChange (a ReactKeyword))
    //return <input onChange={(this.onInputChange)} />;
    //one line method of creating an event handler:
    //return <input onChange = {(event) => console.log(event.target.value)} />
    return (
      // when the input in the search bar changes, change what shows in the value of the input: ____
      // value = {this.state.term} is a controlled component that's only changed by the state
      //the state is change through onChange
      <div>
        <input
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value})} />
      </div>
    );
  }
  //Event handlers:
  //whenever the input changes, run this code
  //event can be e, etc.
  //onInputChange(event) {
//    console.log(event.target.value)

  //}

}

//if we import SearchBar in another file, it'll get the component above
export default SearchBar;
