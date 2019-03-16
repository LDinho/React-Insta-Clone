import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    }
  }

  handleInputChange = (event) => {
    console.log('EVENT', event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchQuery);
  }

  render () {
    return (
      <header className="App-header">

        <div className="logo-wrapper">
          <div className="fab-insta-wrapper"><i className="fab fa-instagram"></i></div>
          <div className="logo">Instagram</div>
        </div>

        <form className="input" onSubmit={this.handleSubmit}>
          <i className="fas fa-search"></i>
          <input name="searchQuery"
                 type="search"
                 placeholder="search"
                 onChange={this.handleInputChange}
                 value={this.state.searchQuery}
          />
        </form>

        <div className="header-icons-wrapper">
          <div><i className="far fa-compass"></i></div>
          <div><i className="far fa-heart"></i></div>
          <div><i className="far fa-user"></i></div>
        </div>

      </header>

    )

  }

}

export default SearchBar;
