import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class TypeText extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  updateText(val) {
    this.setState({
      message: val,
    });
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.updateText(e.target.value)} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default TypeText;
