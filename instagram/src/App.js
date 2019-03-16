import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
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
    console.log('commentsData',commentsData);

    const foundPostIndex = this.state.posts.findIndex((post) => {
      return post.id === commentsData.postId;
    });

    const foundPost = this.state.posts[foundPostIndex];

    foundPost.comments = commentsData.updatedComments;

    const updatedPosts = [...this.state.posts];

    console.log('UpdatedPOst:', updatedPosts);

    this.setState({
      posts: updatedPosts,
    })
  }

  handleSearch =(searchQuery) => {
    console.log('SEARCHQUERY:', searchQuery);

    this.setState({searchQuery: searchQuery});

  }

  render() {
    const {posts, searchQuery} = this.state;
    console.log('POSTS DATA:', posts);

    const filteredPosts = posts.filter((post) => {
      return post.username === searchQuery;
    });

    const maybeFilteredPosts = filteredPosts.length === 0 ? posts : filteredPosts;

    return (
      <main className="App">
        <SearchBar handleSubmit={this.handleSearch} />
        <PostContainer posts={maybeFilteredPosts} onNewCommentAdd={this.handleCommentAdd} />
      </main>
    );
  }
}

export default App;
