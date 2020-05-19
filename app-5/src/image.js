import React, { Component } from "react";

class Image extends Component {
  render() {
    const { url } = this.props;
    return <img src={url}></img>;
  }
}

export default Image;
