import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import '../CommentSection/CommentSection.scss';
import CommentSection from '../CommentSection/CommentSection';

class Post extends Component {
  constructor(props) {
    super(props);

    const {likes} = this.props.post;
    this.state = {
      likes,
    }

  }

  render() {
    const {thumbnailUrl, username, imageUrl, comments, timestamp} = this.props.post;
    const {likes} = this.state;

    return (
      <div className="post-wrapper">
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
        <CommentSection comments={comments} timestamp={timestamp} />
      </div>
    )
  }
}
export default Post;
