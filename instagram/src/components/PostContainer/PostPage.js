import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import '../../App.scss';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from './../SearchBar/SearchBar';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchQuery: '',

    };
  };

  componentDidMount() {

    this.setState({
      posts: dummyData,
    })

  }

  handleCommentAdd = (commentsData) => {
    console.log('commentsData', commentsData);

    const foundPostIndex = this.state.posts.findIndex((post) => {
      return post.id === commentsData.postId;
    });

    // const clonedPosts = [...this.state.posts]

    const foundPost = this.state.posts[foundPostIndex];
    foundPost.comments = commentsData.updatedComments;

    const updatedPosts = [...this.state.posts];

    this.setState({
      posts: updatedPosts,
    });
  }

  handleLike = (likeData) => {
    const foundPostIndex = this.state.posts.findIndex((post) => {
      return post.id === likeData.postId;
    });

    const foundPost = this.state.posts[foundPostIndex];
    foundPost.likes = likeData.newLikeValue;

    const updatedPosts = [...this.state.posts];
    this.setState({
      posts: updatedPosts,
    });
  }

  handleSearch =(searchQuery) => {
    console.log('SEARCHQUERY:', searchQuery);
    this.setState({searchQuery: searchQuery});
  }

  render() {
    const {posts, searchQuery} = this.state;
    console.log('POSTS DATA:', posts);

    const filteredPosts = posts.filter((post) => {
      return post.username.includes(searchQuery);
    });

    const maybeFilteredPosts = filteredPosts.length === 0 ? posts : filteredPosts;

    return (
      <>
        <nav className="nav">
          <SearchBar onSearchInputChange={this.handleSearch} onLogout={this.props.onLogout} />
        </nav>

        <main className="app">
          <PostContainer posts={maybeFilteredPosts}
                       onNewCommentAdd={this.handleCommentAdd}
                       onNewLike={this.handleLike}
                         currentUser={this.props.currentUser}
          />
        </main>
      </>
    );
  }
}

export default PostPage;
