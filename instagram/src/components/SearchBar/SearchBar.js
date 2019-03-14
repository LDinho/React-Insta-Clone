import React from 'react';
// import Proptypes from 'prop-types';

import './SearchBar.scss';

const SearchBar = () => {

  return (
    <header className="App-header">

      <div className="logo-wrapper">
        <div className="fab-insta-wrapper"><i className="fab fa-instagram"></i></div>
        <div className="logo">Instagram</div>
      </div>

      <div className="input">
        <i className="fas fa-search"></i>
        <input type="search" placeholder="search"/>
      </div>

      <div className="header-icons-wrapper">
        <div><i className="far fa-compass"></i></div>
        <div><i className="far fa-heart"></i></div>
        <div><i className="far fa-user"></i></div>
      </div>

    </header>

  )

}

export default SearchBar;
