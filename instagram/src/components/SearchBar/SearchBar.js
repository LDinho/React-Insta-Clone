import React, { Component } from 'react';
// import Proptypes from 'prop-types';

// import './SearchBar.scss';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  
  form {
    position: relative;
    
    .fas {
      font-size: 1.2rem;
      position: absolute;
      top: 18px;
      left: 8px;
    }
  }
  input {
    border: 1px solid lightgray;
    border-radius: 4px;
    font-size: 1.6rem;
    height: 34px;
    width: 300px;
    padding: 8%;
  }
  input::placeholder {
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  
  .logo {
    border-left: 1px solid gray;
    font-family: 'Norican', cursive, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 3rem;
    margin-left: 20px;
    padding-left: 20px;
  }
`;

const HeaderIconsWrapper = styled.div`
  display: flex;
  
  p {
    cursor: pointer;
    margin-left: 10px;
  }
`;

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
      <Header>
        <LogoWrapper>
          <div className="fab-insta-wrapper"><i className="fab fa-instagram" /></div>
          <div className="logo">Instagram</div>
        </LogoWrapper>

        <form className="input" onSubmit={this.handleSubmit}>
          <i className="fas fa-search" />
          <input name="searchQuery"
                 type="search"
                 placeholder="search"
                 onChange={this.handleInputChange}
          />
        </form>

        <HeaderIconsWrapper>
          <div><i className="far fa-compass" /></div>
          <div><i className="far fa-heart" /></div>
          <div><i className="far fa-user" /></div>
          <p className="logout" onClick={this.props.onLogout}>LogOut</p>
        </HeaderIconsWrapper>
      </Header>
    )
  }
}

export default SearchBar;
