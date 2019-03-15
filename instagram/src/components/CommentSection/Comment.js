import React from 'react';
// import Proptypes from 'prop-types';

import './CommentSection.scss';

const Comment = ({comment: {username, id, text}}) => {
  return (

      <div className="comments-wrapper">
        <div className="username-mg"><p>{username}</p></div>
        <div className="comment-content">
          <p>{text}</p>
        </div>
      </div>
  )
}

export default Comment;
