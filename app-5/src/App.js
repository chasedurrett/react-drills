import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./image";

class App extends Component {
  render() {
    return (
      <div>
        <Image
          url={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FM271U68IGLjU_REgAUVmgHaD4%26pid%3DApi&f=1"
          }
        />
      </div>
    );
  }
}
export default App;
