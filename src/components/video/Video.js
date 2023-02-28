import React from 'react';
import YouTube from 'react-youtube';
import './Video.css';

class VideoBackground extends React.Component {
    constructor(props) {
        super(props);
    
        this.player = null;
        this.onReady = this.onReady.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }
    onReady(event) {
        // Get a reference to the YouTube player instance
        this.player = event.target;
    
        // Set up mouse event listeners on the player iframe
        const iframe = this.player.getIframe();
        iframe.addEventListener('mousemove', this.onMouseMove);
    }
    onMouseMove(event) {
        // Calculate the percentage of the video width and height that the mouse is hovering over
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const width = rect.width;
        const height = rect.height;
        const mouseXPercent = (x / width) * 100;
        const mouseYPercent = (y / height) * 100;
    
        // Use the player instance to seek to the corresponding time in the video
        const duration = this.player.getDuration();
        const seekTime = duration * (mouseXPercent / 100);
        this.player.seekTo(seekTime);
    }

    render() {
      const opts = {
        width: '100%',
        playerVars: {
          autoplay: 1,
          controls: 1,
          loop: 1,
          mute: 0,
          modestbranding: 1,
        },
      };
  
      return (
        <div className="video-background">
          <YouTube videoId="DNgTz7RqynM" opts={opts} onReady={this.onReady} />
        </div>
      );
    }
  }

export default VideoBackground;