import React from "react";
import { addDetails } from "../utils/redux/videoInfo";
import { useDispatch } from "react-redux";
import cropTitle from "../helper/cropTitle";
import uploadTime from "../helper/uploadTime";

const SuggestionCard = ({ videos }) => {
  const dispatch = useDispatch();
  const title = videos?.snippet?.title;
  const maxLength = 40;
  const croppedTitle = cropTitle(title, maxLength);
  const publishedAt = videos?.snippet?.publishedAt;
  const timeSincePublished = uploadTime(publishedAt);

  return (
    <div
      className="p-2 m-2 flex w-full "
      onClick={() => dispatch(addDetails(videos?.id?.videoId))}
    >
      <img
        alt="thumbnail"
        src={videos?.snippet?.thumbnails?.medium?.url}
        className="rounded-xl w-52 h-28"
      />
      <div className="pl-3">
        <p className="font-semibold text-sm">{croppedTitle}</p>
        <p>{videos?.snippet?.channelTitle}</p>
        <p>{timeSincePublished}</p>
      </div>
    </div>
  );
};

export default SuggestionCard;
