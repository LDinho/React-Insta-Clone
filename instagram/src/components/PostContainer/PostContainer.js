import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.scss';
import Post from './Post';

const PostContainer = ({currentUser, posts, onNewCommentAdd, onNewLike}) => {

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
                  onNewLike={(newLikeValue) => {
                    onNewLike({
                      postId: post.id,
                      newLikeValue: newLikeValue,
                    })
                  }}
                  currentUser={currentUser}
            />
        )
      })}
    </div>
  )

}

PostContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  currentUser: PropTypes.string,
  onNewCommentAdd: PropTypes.func,
}

export default PostContainer;
