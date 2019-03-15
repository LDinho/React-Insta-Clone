import React from 'react';
// import Proptypes from 'prop-types';

import './PostContainer.scss';
import Post from './Post';

const PostContainer = ({posts}) => {

  return (
    <div className="post-container">
      {posts.map((post) => {
        return (
            <Post key={post.id} post={post}/>
        )
      })}
    </div>
  )

}

export default PostContainer;
