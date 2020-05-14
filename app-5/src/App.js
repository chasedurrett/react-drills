import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKZq0f5FwGwED2YY4l10FPBGxlbTSgOkICyowwyVwxYZD_5dCi&usqp=CAU"
          }
        />
      </div>
    );
  }
}

export default App;
