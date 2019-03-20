import React, { Component } from 'react';
// import Proptypes from 'prop-types';

// import './App.scss';
import PostPage from './components/PostContainer/PostPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {

    return (
      <>
        <PostPage />
      </>
    );
  }
}

export default App;
