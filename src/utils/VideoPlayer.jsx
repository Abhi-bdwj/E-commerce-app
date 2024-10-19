import React from "react";

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <video
        className="w-full h-full object-cover"
        src="src\assets\homeVideo.mp4"
        autoPlay
        loop
        muted
        controls={false}
      />
    </div>
  );
};
export default VideoPlayer;
