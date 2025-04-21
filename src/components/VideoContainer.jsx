import React, { useEffect, useState } from "react";
import { YOUTUBEVIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [video, setVideo] = useState([]);
  const fetchVideo = async () => {
    const response = await fetch(YOUTUBEVIDEO_API);
    const data = await response.json();
    console.log(data);
    setVideo(data.items);
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return (
    <div className="border border-black flex flex-wrap ">
      {video.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
