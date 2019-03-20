import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import './SearchBar.scss';

class SearchBar extends Component {

  handleInputChange = (event) => {
    console.log('EVENT', event.target.value)
    const searchQuery = event.target.value;
    this.props.onSearchInputChange(searchQuery);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render () {
    return (
      <header className="App-header">
        <div className="logo-wrapper">
          <div className="fab-insta-wrapper"><i className="fab fa-instagram" /></div>
          <div className="logo">Instagram</div>
        </div>

        <form className="input" onSubmit={this.handleSubmit}>
          <i className="fas fa-search" />
          <input name="searchQuery"
                 type="search"
                 placeholder="search"
                 onChange={this.handleInputChange}
          />
        </form>

        <div className="header-icons-wrapper">
          <div><i className="far fa-compass" /></div>
          <div><i className="far fa-heart" /></div>
          <div><i className="far fa-user" /></div>
        </div>
      </header>
    )
  }
}

export default SearchBar;
