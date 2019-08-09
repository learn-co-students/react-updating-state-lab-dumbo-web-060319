import React from 'react'

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    handleClick = () => {
        const numClicked = this.state.timesClicked += 1
        this.setState({
            timesClicked: numClicked
        })
    }

    render() {

        return(
            <div>
                <p>I've been clicked {this.state.timesClicked} times</p>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;