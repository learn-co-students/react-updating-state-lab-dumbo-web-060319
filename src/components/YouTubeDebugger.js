import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    },
    user: null
  }

  handleClick = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }})
  }
  handleResolution = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div><button className="bitrate" onClick={this.handleClick} > Bitrate </button>
      <button className="resolution" onClick={this.handleResolution}>Resolution</button></div>
    )
  }
}
