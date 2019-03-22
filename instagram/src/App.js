import React, { Component } from 'react';
// import Proptypes from 'prop-types';

// import './App.scss';

import LoginPage from './components/LoginPage/LoginPage';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {

    return (
        <ComponentFromWithAuthenticate />
    );
  }
}

export default App;
