import React, { Component } from "react";

export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  };

  clickHandler = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  render() {
    return (
      <button label={this.state.timesClicked} onClick={this.clickHandler}>
        {this.state.timesClicked}
      </button>
    );
  }
}
