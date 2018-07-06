import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    //this.props.match.params.id
    //match is  top level property
    //the params property that's inside of it is an object that lists all the different wildcard tokens
    //that exist inside the URL
    //destructure below to get the id
    //if we didn't want to fetchPosts twice (one for the homepage and one for when we click on a particular post)
    //wrap this entire componentDidMount() function inside if(!this.props.post)  - lecture 148
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    
    //calling the deletePost action creator
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;
    //we render the screen before we fetch the data so post would be undefined so post.title, etc. isn't working
    //so if doesn't render, return a div saying loading ...
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      //pull-xs-right puts the button at the right side of the screen
      <div>
        <Link to="/" className="btn btn-primary">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}
//called with the state function (we only care about the posts though so just call {posts})
//first argument is the application state, second argument is ownProps (a term used by convention)
// it's the props object that's headed or going to the PostsShow component  (same as this.props within the component)
//so the post is the only post we care about and not the whole list
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
