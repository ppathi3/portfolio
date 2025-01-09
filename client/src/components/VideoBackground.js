import React from 'react';
import './../styles/VideoBackground.css';

const VideoBackground = ({ children }) => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
