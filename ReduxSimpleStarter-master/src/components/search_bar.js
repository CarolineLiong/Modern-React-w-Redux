//need to use React to convert JSX code
// {Component} pulls out React.Component from React - so we call Component rather than React.Component
import React, { Component } from 'react';

//define the component (this is a functional component)
//const SearchBar = () => {
//  return <input />;
//};

//create a class component
// a class component must always have a render method
class SearchBar extends Component {
  //this is how we initialize a state in a class component (only class components, not function have states)
  constructor(props){
    //we're calling the parent constructor method from Component
    super(props);
    //we initialize the state by assigning it an object (hence the {} )
    //the object we pass in will also have properties that we want to record on the state- in this case term
    //initialize the state: the search term is at first an empty string
    //"term" is not a keyword - can be whatever we want
    this.state= { term: ''}
  }
  render() {
    //create a new input element with property onChange (an event handler called onChange (a React keyword))
    //whenever we're using JSX, we have to call javascript varaibles by wrapping them with {}
    //we call the event handler in onChange={this.onInputChange}



    //return <input onChange={(this.onInputChange)} />;
    //one line method of creating an event handler:


    //return <input onChange = {(event) => console.log(event.target.value)} />
    return (
      //this changes the state to the new input (manipulates our state )
      //never do: this.state.term = event.target.value  BAD!!
      //only use this.state.term to reference the term, not change it
      // in the example below, the input changing event tells what the state should be
      // this is the opposite of controlled fields
      // return <input onChange = {event => this.setState({term: event.target.value })} />


      // when the input in the search bar changes, change what shows in the value of the input: ____
      // value = {this.state.term} is a controlled component that's only changed by the state
      //the state tells the input what its values should be 
      //the state is change through onChange
      //className refers to the search-bar variable in the css file
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  //Event handlers:
  //whenever the input changes, run this code
  //event handlers always called with an event object
  //event can be e, etc. - can also say handleInputChange()
  //event has a lot of technical properties that describes the event that occurred
  //onInputChange(event) {
      //event.target.value contains what's typed into the search bar
//    console.log(event.target.value)

  //}
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

//if we import SearchBar in another file, it'll get the component above
export default SearchBar;
