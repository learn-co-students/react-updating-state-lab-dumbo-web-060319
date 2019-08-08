// Code DigitalClicker Component Here
import React from "react"

export default class DigitalClicker extends React.Component
{

    state = 
    {
        timesClicked: 0
    }

    handleClick = () => 
    {
        let incremented = this.state.timesClicked + 1;
        this.setState({
            timesClicked: incremented
        });
    }

    render() 
    {
        return (
            <button onClick = {this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}