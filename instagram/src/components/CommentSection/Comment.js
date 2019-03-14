import React from 'react';
// import Proptypes from 'prop-types';

import './CommentSection.scss';

const Comment = ({comments}) => {

  return (
    <section className="comments-section">
      {comments.map(({id, username, text}) => {
        return (
          <div key={id} className="comments-wrapper">
            <div className="username-mg"><p>{username}</p></div>
            <div className="comment-content">
              <p>{text}</p>
            </div>
          </div>
        )
      })}
    </section>

  )

}

export default Comment;
