import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const VideoCarousel = () => {
  const videos = [
    {
      id: 1,
      src: "src/assets/videos/homeVideo1.mp4",
      title: "Video 1",
    },
    {
      id: 2,
      src: "src/assets/videos/homeVideo2.mp4",
      title: "Video 2",
    },
    {
      id: 3,
      src: "src/assets/videos/homeVideo3.mp4",
      title: "Video 3",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleVideoEnd = () => {
    nextVideo(); 
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <video
          className="w-full h-full object-cover"
          src={videos[currentVideoIndex].src}
          title={videos[currentVideoIndex].title}
          autoPlay
          muted
          onEnded={handleVideoEnd} 
        />
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevVideo}
          className="p-2 rounded-full bg-transparent text-white hover:bg-gray-700 hover:bg-opacity-50 transition"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextVideo}
          className="p-2 rounded-full bg-transparent text-white hover:bg-gray-700 hover:bg-opacity-50 transition"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {videos.map((video, index) => (
          <span
            key={video.id}
            className={`w-3 h-3 rounded-full ${
              index === currentVideoIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
