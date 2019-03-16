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

    };

  };

  componentDidMount() {

    this.setState({
      posts: dummyData,
    })

  }

  handleSearch =(searchQuery) => {
    console.log('SEARCHQUERY:', searchQuery);

    const searchResults = this.state.posts.filter((post) => {
      return post.username === searchQuery;
    })
    console.log('FILTER', searchResults )

    if (searchResults.length === 0) return;

    this.setState({
      posts: searchResults,
    })
  }

  render() {
    const {posts} = this.state;
    console.log('POSTS DATA:', posts);
    return (
      <main className="App">
        <SearchBar handleSubmit={this.handleSearch} />
        <PostContainer posts={posts} />
      </main>
    );
  }
}

export default App;
