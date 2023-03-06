import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './BackgroundVideo.css'

const BackgroundVideo = () => {
   // Load the video files from the "videos" folder
   const videos = require.context('../videos', true);
   const videoFiles = videos.keys().map(key => videos(key));

   // Select a random video file
   const randomVideoFile = videoFiles[Math.floor(Math.random() * videoFiles.length)]; 
  return (
    <Container fluid>
           <video autoPlay loop muted controls={false}>
              <source src={randomVideoFile} type="video/mp4" />
           </video>
           <div className='gradient-overlay'></div>
    </Container>
  );
};

export default BackgroundVideo;