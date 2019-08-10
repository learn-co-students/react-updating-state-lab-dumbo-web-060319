// Code DigitalClicker Component Here

import React, {Component} from 'react'

export default class DigitalClicker extends Component {

  state = {
    timesClicked : 0
  }

  clickerHandler = () =>  {
    console.log(this.state)
    let incrementState = (this.state.timesClicked + 1)
    console.log(incrementState)
    this.setState({
      timesClicked: (incrementState)
    })
  }

  render() {
    {console.log("digitalClicker")}
    return (
      <div className="digitalClicker">
        <div> hi from digital click </div>
        {/* <h4>{}</h4> */}
        <button onClick={this.clickerHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }

}