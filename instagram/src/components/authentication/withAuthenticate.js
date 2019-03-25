import React from "react";

const withAuthenticate = (LoggedInComponent) => (LoggedOutComponent) => {
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        currentUser: '',
        loggedIn: false,
        showCreateAccountMessage: false,
      };
    };

    // componentDidMount() {
    //   const accounts = localStorage.getItem('accounts');
    //   console.log('USER:', accounts);
    //   const accountsObject = JSON.parse(accounts);
    //   this.setState({
    //   })
    // }

    handleLogin = (username) => {
      const accounts = localStorage.getItem('accounts');
      const accountsObject = JSON.parse(accounts);

      const doesUserExist = Boolean(accountsObject[username]);

      this.setState({
        currentUser: doesUserExist ? username : '',
        loggedIn: doesUserExist,
        showCreateAccountMessage: !doesUserExist,

      })
    }

    handleLogout = () => {
      this.setState({
        loggedIn: false,
      })
    }

    render() {
      const {currentUser, loggedIn, showCreateAccountMessage} = this.state;

      if (loggedIn) {
        return <LoggedInComponent currentUser={currentUser} onLogout={this.handleLogout}/>;
      }

      return (
          <LoggedOutComponent showCreateAccountMessage={showCreateAccountMessage} onLogin={this.handleLogin}/>
      );
    }
  };
};

export default withAuthenticate;
