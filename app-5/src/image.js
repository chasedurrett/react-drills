import React, { Componenet, Component } from "react";

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url}></img>
      </div>
    );
  }
}

export default Image;
