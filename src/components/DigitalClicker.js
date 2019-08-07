import React, { Component } from 'react'

class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  increaseNumber = () => {
    this.setState({
      timesClicked: this.state.timesClicked+1
    })
  }

  render() {
    return (
      <button onClick= {this.increaseNumber}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
