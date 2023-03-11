import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

function VideoBackground()  {
      return (
        <div className="video-background">
          <div className='overlay'></div>
          <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
       
        </div>
      );
}
export default VideoBackground;