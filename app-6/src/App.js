import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDo from "./To-do";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
      toDoList: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(val) {
    this.setState({ newTask: val });
  }

  handleClick() {
    this.setState({
      toDoList: [...this.state.toDoList, this.state.newTask],
      input: "",
    });
  }

  render() {
    let updatedList = this.state.toDoList.map((element, index) => {
      return <ToDo key={index} task={element} />;
    });
    return (
      <div>
        <h1>to do list</h1>
        <input
          value={this.state.newTask}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button onClick={this.handleClick}>input task</button>
        <br />
        {updatedList}
      </div>
    );
  }
}
export default App;
