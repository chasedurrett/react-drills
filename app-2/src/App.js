import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: ["tiger", "lion", "elephant"],
    };
  }
  render() {
    let animalList = this.state.animals.map((element, index) => {
      return (
        <h2>
          {index} {element}
        </h2>
      );
    });
    return <div>{animalList}</div>;
  }
}

export default App;
