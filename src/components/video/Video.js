import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

function VideoBackground({url})  {
  const [play,setPlay]=useState(true)
  console.log(play)
const PlayVid=()=>{
  setPlay(!play)
  console.log("play dc ne: ",play)

}
  console.log("VideoBackground said: ",play,url)
      return (
        <div className="video-background" onClick={()=>setPlay(!play)}>
         
          <ReactPlayer
           playing={play}
           
                className='video-item'
                url={url}
                sources={[
                    { src: '<https://www.youtube.com/watch?v=IbJLWZaTcQs>', type: 'video/mp4' },
                    { src: '<https://www.youtube.com/watch?v=IbJLWZaTcQs>', type: 'video/webm' },
                ]}
                tracks={[
                    { src: '<https://example.com/subtitles.vtt>', kind: 'subtitles', srclang: 'en' },
                    { src: '<https://example.com/captions.vtt>', kind: 'captions', srclang: 'en' },
                ]}
            />
        </div>
      );
}
export default VideoBackground;