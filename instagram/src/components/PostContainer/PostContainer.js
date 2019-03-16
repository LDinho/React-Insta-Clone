import React from 'react';
// import Proptypes from 'prop-types';

import './PostContainer.scss';
import Post from './Post';

const PostContainer = ({posts, onNewCommentAdd}) => {

  return (
    <div className="post-container">
      {posts.map((post) => {
        return (
            <Post key={post.id}
                  post={post}
                  onNewCommentAdd={(updatedComments) => {
                    onNewCommentAdd({
                      postId: post.id,
                      updatedComments: updatedComments,
                    })

                  }}

            />
        )
      })}
    </div>
  )

}

export default PostContainer;
