import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/redux/sideBarSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(closeMenu());
  }, []);

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEO_API);
    const json = await videos.json();
    setVideos(json.items);
  };
  return videos?.length === 0 ? (
    "loading..."
  ) : (
    <div className="flex flex-wrap ml-10">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {" "}
          <VideoCard data={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
