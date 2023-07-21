import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEO_API);
    const json = await videos.json();
    setVideos(json.items);
    console.log(json["items"]);
  };
  if(videos.length === 0) return null;
  return (
    <div className="flex flex-wrap ml-16">
      {videos.map((video) => (
        <VideoCard data={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
