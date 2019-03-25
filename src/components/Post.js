import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions/postAction'


class Post extends Component {  
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
    
  }
  render() {
    const post = this.props.post ? (
      <div className="center text-darken-4">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn white pink-text z-depth-1" onClick={ this.handleClick }>Delete Post
            <i className="material-icons right">delete</i>
          </button>
        </div>
      </div>
    ) : (
      <div className="center">
        <span className="red-text">Loading post</span>
      </div>
    );
    return (
      <div className="container">
        { post }
      </div>
    )
  }
} 

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)
