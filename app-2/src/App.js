import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: ["joe", "byork", "tundi", "billyboe"],
    };
  }

  render() {
    let robots = this.state.robots.map((element, index) => {
      return <h2>{element}</h2>;
    });
    return <div className="App">{robots}</div>;
  }
}

export default App;
