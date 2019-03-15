import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import './CommentSection.scss';
import Comment from './Comment';

const fakeUsers = ['dude2', 'dodo5', 'prince4', 'Johnny', 'max', 'golden'];

class CommentSection extends Component {
  constructor (props) {
    super(props);

    const {comments} = this.props;
    this.state = {
      comments,
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

    const fakeUserRandomIndex = Math.floor(Math.random() * Math.floor(fakeUsers.length));

    const newComment = {
      id: Date.now(),
      username: fakeUsers[fakeUserRandomIndex],
      text: this.state.comment,
    }

    // this.setState({
    //   comments: [...this.state.comments, newComment],
    // })

    this.setState((prevState) => {
      return {
        comments: [...prevState.comments, newComment],
        comment: '',
      }
    })

  }

  render() {
    const {timestamp} = this.props;
    const {comments} = this.state;

    return (
      <section className="comments-section">
        {comments.map((comment) => console.log('Comments:', comment) ||
          <Comment key={comment.id} comment={comment} />)}

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
