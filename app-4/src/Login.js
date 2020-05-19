import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleUsername(val) {
    this.setState({ username: val });
  }

  handlePassword(val) {
    this.setState({ password: val });
  }

  handleClick() {
    alert(`${this.state.username} ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input
          placeholder="username"
          onChange={(e) => this.handleUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => this.handlePassword(e.target.value)}
        />
        <button onClick={this.handleClick}>login</button>
      </div>
    );
  }
}

export default Login;
