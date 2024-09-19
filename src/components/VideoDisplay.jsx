import React from 'react';
import vid1 from '../assets/vid1.mp4';

function VideoDisplay() {
  return (
    <video 
        src={vid1} 
        autoPlay 
        muted 
        loop 
        className='w-full h-full absolute top-0 left-0 object-cover border-[10px] border__light z-10 sm:hidden'
      />
  );
}

export default VideoDisplay;
