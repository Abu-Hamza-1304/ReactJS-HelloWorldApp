import React from "react";

// Message Component
function Message(props) {
  if (props.isLoggedIn) return <h2>Welcome User</h2>;
  else return <h2>Please Login</h2>;
}

// Login Component
function Login(props) {
  return <button onClick={props.clickFunc}>Login</button>;
}

// Logout Component
function Logout(props) {
  return <button onClick={props.clickFunc}>Logout</button>;
}

// Parent Homepage Component
class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.ifLoginClicked = this.ifLoginClicked.bind(this);
    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }

  ifLoginClicked() {
    this.setState({
      isLoggedIn: true,
    });
  }

  ifLogoutClicked() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    return (
      <div>
        <Message isLoggedIn={this.state.isLoggedIn} />

        {this.state.isLoggedIn ? (
          <Logout clickFunc={this.ifLogoutClicked} />
        ) : (
          <Login clickFunc={this.ifLoginClicked} />
        )}
      </div>
    );
  }
}

export default Homepage;
