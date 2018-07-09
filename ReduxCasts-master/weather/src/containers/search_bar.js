import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";


class SearchBar extends Component {
  //initialize the state in the constructor
  //term = search term which is first empty
  constructor(props) {
    super(props);

    //initialize our component state as an empty string
    // term = search term
    this.state = { term: "" };

    //take the existing function of this.onInputChange, bind it to "this" and then replace
    //the existing function w/ it (we're overwritting the original function this.onInputChange)
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    //tell the browser to not submit the form and therefore not refresh the site itself
    event.preventDefault();

    // We need to go and fetch weather data
    //this.state.term = city in the actionCreator
    this.props.fetchWeather(this.state.term);
    //reset the state: the search term is an empty string again
    this.setState({ term: "" });
  }

  //"input group" is from boostrap
  //class names are from bootstrap documentation
  //span wraps a submit button

  //when we pass off the event handler onInputChange like this,
  //"this" is not going to be our searchbar component - mystery context
  //to fix this we need to bind the context of onInputChange to this in the constructor above
  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
//this binds the actionCreator to the props of this container
// so we can call this.props.fetchWeather
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//null is passed b/c we don't have a mapStateToProps - don't care about state here
//mapDispatchToProps is always passed a second argument
export default connect(null, mapDispatchToProps)(SearchBar);
