import { useState } from 'react';

export default function VideoReel() {
  const [videos, setVideos] = useState([
    '/videoReels/reel04.mp4',
    '/videoReels/reel01.mp4',
    '/videoReels/reel05.mp4',
    '/videoReels/reel03.mp4',
    '/videoReels/reel06.mp4',
  ]);

  return (
    <div className="container bg-black mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Video Reel</h2>
      <div className="flex flex-row flex-nowrap overflow-x-scroll">
        {videos.map((video, index) => (
          <div key={index} className="relative w-[300px] h-[420px] mr-4">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
              <video
                src={video}
                controls
                className="w-full h-full object-cover"
              ></video>
            </div>
            {index < videos.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}