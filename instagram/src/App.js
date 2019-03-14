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
      posts: dummyData,

    };

  };
  render() {
    const {posts} = this.state;
    console.log('POSTS DATA:', posts);
    return (
      <main className="App">
        <SearchBar />
        <PostContainer posts={posts} />
      </main>
    );
  }
}

export default App;
