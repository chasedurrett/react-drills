import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredStr: "",
      robots: ["zuck", "zamboni", "zales", "elon", "embroski"],
    };
  }

  handleChange(val) {
    this.setState({
      filteredStr: val,
    });
  }

  render() {
    let filteredRobots = this.state.robots
      .filter((element) => {
        return element.includes(this.state.filteredStr);
      })
      .map((element) => {
        return <h2>{element}</h2>;
      });
    return (
      <div>
        <input onChange={(e) => this.handleChange(e.target.value)} />
        {filteredRobots}
      </div>
    );
  }
}

export default App;
