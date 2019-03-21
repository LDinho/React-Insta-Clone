import React from "react";

const withAuthenticate = (Component) => {
  return class extends React.Component {

    render() {
      return (
          <Component />
      );
    }
  };
};

export default withAuthenticate;

