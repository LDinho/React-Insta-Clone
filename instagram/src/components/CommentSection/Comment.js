import React from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    text: PropTypes.string,
  }),

}

export default Comment;
