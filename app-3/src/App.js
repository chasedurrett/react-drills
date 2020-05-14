import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      snakes: ["bill", "bob", "borsty", "slicky", "slappy"],
    };
  }

  change(val) {
    this.setState({
      userInput: val,
    });
  }

  render() {
    let filteredSnakes = this.state.snakes
      .filter((element) => {
        return element.includes(this.state.userInput);
      })
      .map((element) => {
        return <h2>{element}</h2>;
      });
    return (
      <div className="App">
        <input onChange={(e) => this.change(e.target.value)} />
        {filteredSnakes}
      </div>
    );
  }
}

export default App;
