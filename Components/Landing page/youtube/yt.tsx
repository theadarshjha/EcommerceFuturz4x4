// components/YouTubeGallery.js
'use client'
import React, { useState } from 'react';

const videos = [
  {
    title: 'Large Video',
    url: 'https://www.youtube.com/embed/QgF0Sq_JrmM', // Correct embedded URL
  },
  {
    title: 'Small Video 1',
    url: 'https://www.youtube.com/embed/QgF0Sq_JrmM', // Replace with actual video URL
  },
  {
    title: 'Small Video 2',
    url: 'https://youtube.com/embed/eD4j68iTZ-Q', // Replace with actual video URL
  },
  {
    title: 'Small Video 3',
    url: 'https://www.youtube.com/embed/8DOiEbA3bBE', // Replace with actual video URL
  },
  // Add more videos here if needed
];

const YouTubeGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0].url);

  return (
    <div className="pt-3 pb-2 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-sf-pro-icons font-extrabold text-gray-900 text-center mb-10">YouTube Gallery</h1>
        
        {/* Large Video */}
        <div className="mb-6 flex justify-center">
          <iframe
            width="768"
            height="432"
            src={currentVideo}
            title="Large Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Scrollable Thumbnails */}
        <div className="overflow-x-auto  whitespace-nowrap py-2 flex justify-center">
          {videos.slice(1).map((video, index) => (
            <div
              key={index}
              className="inline-block px-2"
              style={{ width: '260px', height: '146px' }} // Fixed width and height for small videos
              onClick={() => setCurrentVideo(video.url)}
            >
              <iframe
                width="260"
                height="146"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeGallery;
