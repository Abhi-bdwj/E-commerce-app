import VideoPlayer from "@/utils/VideoPlayer";
import React from "react";

const Home = () => {
  return (
    <div >
      <VideoPlayer src="src\assets\homeVideo.mp4" type="video/mp4" />
    </div>
  );
};

export default Home;
