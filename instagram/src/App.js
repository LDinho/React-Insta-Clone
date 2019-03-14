import React, { Component } from 'react';
import './App.scss';

import dummyData from './dummy-data';

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

          <div>
            {posts.map((post) => {
              return <p key={post.id}>{post.username}</p>;
            })}
          </div>

        </header>
      </div>
    );
  }
}

export default App;
