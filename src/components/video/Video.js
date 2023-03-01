import React from 'react';
import YouTube from 'react-youtube';
import './Video.css';

class VideoBackground extends React.Component {
    render() {
      const opts = {
        width: '100%',
        playerVars: {
          autoplay: 1,
          controls: 1,
          loop: 1,
          mute: 0,
        },
      };
  
      return (
        <div className="video-background">
          <div className='overlay'></div>
          <YouTube videoId="RzVvThhjAKw" opts={opts} />
        </div>
      );
    }
  }

export default VideoBackground;