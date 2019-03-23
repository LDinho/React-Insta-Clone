import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import '../CommentSection/CommentSection.scss';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components'


const PostWrapper = styled.div`
  border: 1px solid lightgray;
  margin-bottom: 40px;
  
  .post-header-wrapper {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  
  .avatar-wrapper {
    width: 8%;
    margin-left: 20px;
  
    img {
      border-radius: 50%;
    }
  }
  
  .username-mg {
    margin-left: 16px;
  
    p {
      font-weight: 600;
    }
  }
  
  .image-post-wrapper {
    margin-top: 16px;
  }
  
  .comment-icon-wrapper {
    margin-top: 10px;
  
    .fa-heart {
      cursor: pointer;
    }
  }
  
  .likes-wrapper {
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 20px;
  
    p {
      margin-left: 8px;
  
    }
  }
`;

class Post extends Component {

  onClickHandler = () => {
    const {post: {likes}, onNewLike} = this.props;
    onNewLike(likes + 1);
  }

  render() {
    const {thumbnailUrl, username, imageUrl, comments, timestamp, likes} = this.props.post;
    const {onNewCommentAdd} = this.props;

    return (
      <PostWrapper>
        <div className="post-header-wrapper">
          <div className="avatar-wrapper">
            <img src={thumbnailUrl} alt="avatar"/>
          </div>
          <div className="username-mg"><p>{username}</p></div>
        </div>
        <div className="image-post-wrapper">
          <img src={imageUrl} alt="post"/>
        </div>
        <div className="comment-icon-wrapper">
          <i className="far fa-heart" onClick={this.onClickHandler}></i>
          <i className="far fa-comment"></i>
        </div>
        <div className="likes-wrapper">
          <div>{likes}</div>
          <div><p>likes</p></div>
        </div>
        <CommentSection comments={comments}
                        timestamp={timestamp}
                        onNewCommentAdd={onNewCommentAdd}
                        currentUser={this.props.currentUser}
        />
      </PostWrapper>
    )
  }
}

export default Post;
