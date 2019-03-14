import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import './CommentSection.scss';
import Comment from './Comment';

class CommentSection extends Component {
  // constructor (props) {
  //   super(props);
  //
  // }

  render() {
    const {comments, timestamp} = this.props;

    return (
      <>
        <Comment comments={comments}/>
        <time className="timestamp">{timestamp}</time>

        <div className="comment-input">
          <input type="text" placeholder="add comment here..."/>
        </div>
      </>
    )
  }
}

export default CommentSection;
