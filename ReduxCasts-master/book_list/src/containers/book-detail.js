import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  //if we call this.state, we're not calling the application state
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //state.activeBook was made in our rootReducer in index.js
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
