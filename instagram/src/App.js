import React, { Component } from 'react';
import Proptypes from 'prop-types';

import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

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
      <div className="App">
        <header className="App-header">

          <i className="fab fa-instagram"></i>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>

          <div className="logo">Instagram</div>
        </header>
        <PostContainer posts={posts} />
      </div>
    );
  }
}

export default App;
