import React, { Component } from "react";

//the helpers from Redux-form
import { Field, reduxForm } from "redux-form";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

//PostsNew will be the new page containig the form where users can add a new post
class PostsNew extends Component {
  //renderField is just supposed to return some amount of jsx
  //the field object contain event handlers that we need to wire up to the JSX that we're returning
  //it contains a single piece of state
  // {...field.input} - object that contains all the properties of the inputs
  // it replaces onChange = {field.input.onChange}, onFocus = {field.input.onFocus}, etc.
  renderField(field) {
    
    //this shows the errors on the screen
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }
  //component prop interacts directly w/ the user - we want to have cotnrol over how the field shows on the screen
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
//values contains all the values that users entered into the form
//the ___ in values.___ must be identical to the name in the fields above
function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }

  //the errors object is currently empty
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}
//first argument is a function, which takes in several configurations
//we'll use the form property -  "PostsNewForm" will be the name of the ReduxForm - it must be a unique string
export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
