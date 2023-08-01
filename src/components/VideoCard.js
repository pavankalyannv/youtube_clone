import React from "react";

const VideoCard = ({data}) => {
    const {snippet} = data;
    const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="m-2 h-[22rem] w-72 border border-gray-800 shadow-md rounded-sm">
      <img
        className="rounded-lg"
        src={thumbnails.high.url}
        alt="thumbnail"
      />
      <ul className="p-2">
        <li className="font-bold">{channelTitle}</li>
        <li> {title}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
