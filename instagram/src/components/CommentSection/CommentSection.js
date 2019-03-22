import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import './CommentSection.scss';
import Comment from './Comment';

// const fakeUsers = ['dude2', 'dodo5', 'prince4', 'Johnny', 'max', 'golden'];

class CommentSection extends Component {
  constructor (props) {
    super(props);

    this.state = {
      comment: '',

    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addNewComment = (event) => {
    event.preventDefault();
    // const fakeUserRandomIndex = Math.floor(Math.random() * Math.floor(fakeUsers.length));

    const newComment = {
      id: Date.now(),
      username: this.props.currentUser,
      text: this.state.comment,
    }
    // this.setState({
    //   comments: [...this.state.comments, newComment],
    // })
    const updatedComments = [...this.props.comments, newComment];

    this.props.onNewCommentAdd(updatedComments);

    this.setState({
      comment: '',
    })
  }

  render() {
    const {timestamp, comments} = this.props;

    return (
      <section className="comments-section">
        {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}

        <time className="timestamp">{timestamp}</time>

        <form className="comment-input" onSubmit={this.addNewComment}>
          <input name="comment"
                 onChange={this.handleInputChange}
                 type="text"
                 placeholder="add comment here..."
                 value={this.state.comment}
          />
        </form>
      </section>
    )
  }
}

export default CommentSection;
