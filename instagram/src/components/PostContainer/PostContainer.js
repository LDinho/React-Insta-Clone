import React from 'react';
import Proptypes from 'prop-types';

import './PostContainer.scss';

const PostContainer = ({posts}) => {
  console.log('PostContainer:', posts)

  return (
    <div className="post-container">
      {posts.map(({id, thumbnailUrl, username, imageUrl, likes, timestamp}) => {
        return (
            <div key={id} className="post-wrapper">
              <div className="post-header-wrapper">
                <div className="avatar-wrapper">
                  <img src={thumbnailUrl} alt="avatar"/>
                </div>
                <div className="username-mg"><p>{username}</p></div>
              </div>
              <div className="image-post-wrapper">
                <img src={imageUrl} alt="image-post"/>
              </div>
              <div className="comment-icon-wrapper">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
              </div>
              <div className="likes-wrapper">
                <div>{likes}</div>
                <div><p>likes</p></div>
              </div>
            </div>
        )
      })}
    </div>

  )

}

export default PostContainer;
