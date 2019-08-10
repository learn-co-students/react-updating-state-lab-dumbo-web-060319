// Code YouTubeDebugger Component Here


import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  bitrateHandler = () => {
    this.setState({
      ...this.state, 
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionHandler = () => {
    console.log(this.state.settings.video)
    this.setState({
      ...this.state, 
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    {console.log("YouTubeDebugger")}
    return (
      <div>
        <button onClick={this.bitrateHandler}className="bitrate">bitrate</button>
        <button onClick={this.resolutionHandler}className="resolution">resolution</button>
      </div>
    )
  }

}