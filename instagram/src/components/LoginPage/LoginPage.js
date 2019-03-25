import React, { Component } from 'react';
// import Proptypes from 'prop-types';

import './../PostContainer/PostContainer.scss';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',

    };
  };

  handleInputChange = (event) => {
    const {value, name} = event.target;

    this.setState({
      [name]: value,

    })
  }

  handleCreateAccount = () => {
    const {username} = this.state;
    const accounts = localStorage.getItem('accounts');

    console.log(accounts);
    const accountsObject = JSON.parse(accounts);

    const updatedAccounts = {
      ...accountsObject,
      [username.toLowerCase()]: true,
    }

    const updatedAccountsString = JSON.stringify(updatedAccounts);

    localStorage.setItem('accounts', updatedAccountsString);
  }

  login = () => {
    this.props.onLogin(this.state.username.toLowerCase());
  }

  render() {

    const {showCreateAccountMessage} = this.props;

    console.log('STATE', this.state);

    return (
      <div className="post-container">
        <form className="login-form" onSubmit={e => e.preventDefault()}>
          <label htmlFor="username">Username</label>
          <input className="username"
                 id="username"
                 type="text"
                 name="username"
                 placeholder="Enter username"
                 value={this.state.username}
                 onChange={this.handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input className="password"
                 id="password"
                 type="password"
                 name="password"
                 placeholder="Enter password"
                 value={this.state.password}
                 onChange={this.handleInputChange}
          />

          <button onClick={this.login}>Login</button>
          <button onClick={this.handleCreateAccount}>Create Account</button>
        </form>
        {showCreateAccountMessage && <p style={{color: 'red'}}>Please create an account</p>}

      </div>
    )
  }

}

export default LoginPage;
