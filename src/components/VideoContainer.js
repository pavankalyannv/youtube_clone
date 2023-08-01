import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API, LIST } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/redux/sideBarSlice";
import { addvideos } from "../utils/redux/videoInfo";
import { useDispatch, useSelector } from "react-redux";
import TagList from "./TagList";

const VideoContainer = () => {
  const [id, setId] = useState();
  const videos = useSelector((store) => store.details.videoList);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(closeMenu());
  }, []);

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEO_API);
    const json = await videos.json();
    // setVideos(json.items);
    dispatch(addvideos(json.items));
  };
  return videos?.length === 0 ? (
    "loading..."
  ) : (
    <div>
      <TagList list={LIST} />
      <div  className="flex flex-wrap justify-center  dark:bg-black dark:text-white ">
        {videos?.map((video) =>
          video?.id?.videoId ? (
            <Link
              key={video?.id?.videoId}
              to={"/watch?v=" + video?.id?.videoId}
            >
              <VideoCard data={video} />
            </Link>
          ) : (
            <Link key={video?.id} to={"/watch?v=" + video?.id}>
              <VideoCard data={video} />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
