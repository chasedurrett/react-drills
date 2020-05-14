import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  usernameChange(val) {
    this.setState({
      username: val,
    });
  }

  passwordChange(val) {
    this.setState({
      password: val,
    });
  }

  handleLogin() {
    alert(
      `Username: ${this.state.username} Password: ${this.state.password}`
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.usernameChange(e.target.value)}
        />
        <input
          type="text"
          onChange={(e) => this.passwordChange(e.target.value)}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
