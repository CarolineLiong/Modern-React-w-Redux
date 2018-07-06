import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

//link component is like an anchor tag that can redirect to different pages inside the react application
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

//PostIndex is the component that shows what's on the homescreen in index.js
//componentDidMount is a react lifecycle method
//that is automatically called when the component is first rendered in the DOM
class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  //posts is an object, so must use _.map
  //for each post in the array this.props.post list the post title
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  //when the user clickes on the Link, it'll move to /posts/new
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
//connect the action creator itself: {fetchPosts} is the same as {fetchPosts: fetchPosts}
//can use dispatch like the other projects - same thing
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
