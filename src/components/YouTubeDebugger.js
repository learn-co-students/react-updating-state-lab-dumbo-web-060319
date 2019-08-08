// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor () {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
 
       }

    handleSettingsClick= () => {
     this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
      })
    }

    handleResolutionClick = () => {
      this.setState({
        settings:{
          bitrate: 8,
          video: {
            resolution: '720p'
          }
        }
      })
    }

    render() {
      return(
        <div>
          <button className="bitrate" onClick={this.handleSettingsClick}></button>
          <button className="resolution" onClick={this.handleResolutionClick}></button>
        </div>
      )
    }







}