import React, { Component } from 'react';
// import Proptypes from 'prop-types';

// import './App.scss';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {

    return (
      <>
        <ComponentFromWithAuthenticate />
      </>
    );
  }
}

export default App;
