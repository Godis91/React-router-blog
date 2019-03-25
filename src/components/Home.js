import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
        <div className="center">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div className="red-text">No Posts Yet</div>
        </div>
      
    )
    return (
      <div className="container home">
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(Home)
