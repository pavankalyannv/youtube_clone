import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SEARCH_TEXT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchPageContainer = () => {
  const [videos, setVideos] = useState([]);

  const querySelector = useSelector((store) => store.details.text);

  useEffect(() => {
    getVideos();
  }, [querySelector]);

  const getVideos = async () => {
    const videos = await fetch(SEARCH_TEXT_API + querySelector);

    const json = await videos.json();
    setVideos(json.items);
  };
  return videos?.length === 0 ? (
    "loading..."
  ) : (
    <div className="flex flex-wrap ml-10">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id.videoId}>
          {" "}
          <VideoCard data={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default SearchPageContainer;
