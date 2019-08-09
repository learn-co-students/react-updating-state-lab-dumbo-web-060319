import React from 'react';

class YouTubeDebugger extends React.Component {

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

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
            }
        })
    }

    render() {

        return(
            <div>
                <p>Bitrate: {this.state.settings.bitrate}</p>
                <button onClick={this.handleBitrateClick} className='bitrate'>Change Bitrate</button>
                <p>resolution: {this.state.settings.video.resolution}</p>
                <button onClick={this.handleResolutionClick} className='resolution'>Change resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger