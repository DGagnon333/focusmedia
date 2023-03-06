import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const BackgroundVideo = () => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // Load the video files from the "videos" folder
    const videos = require.context('../videos', true);
    const videoFiles = videos.keys().map(key => videos(key));

    // Check if a video file is saved in local storage
    const savedVideoFile = localStorage.getItem('bgVideo');

    if (savedVideoFile && videoFiles.includes(savedVideoFile)) {
      // Use the saved video file
      setVideoSrc(savedVideoFile);
    } else {
      // Select a random video file
      const randomVideoFile = videoFiles[Math.floor(Math.random() * videoFiles.length)];

      // Save the selected video file in local storage
      localStorage.setItem('bgVideo', randomVideoFile);

      // Set the video source
      setVideoSrc(randomVideoFile);
    }
  }, []);

  return (
    <Container fluid className="p-0">
      <span>
           <video autoPlay loop muted controls={false} className="w-100 h-120 position-absolute m-n20">
              <source src={videoSrc} type="video/mp4" />
           </video>
     </span>
    </Container>
  );
};

export default BackgroundVideo;