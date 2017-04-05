import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return(
        <div>loading......</div>
      );
    }

    return(
      <div>
        <h3>{post.name}</h3>
        <h6>{post.breed}</h6>
        <p>age: {post.age}</p>
        <p>gender: {post.sex}</p>
        <Link to="/" className="btn btn-primary">Back</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
