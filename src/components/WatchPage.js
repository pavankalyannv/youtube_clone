import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/redux/sideBarSlice";
import CommentsContainer from "./Comments";
import { COMMENTS_API } from "../utils/constants";
import RelatedSuggestions from "./RelatedSuggestions";

const WatchPage = () => {
  const [videoId] = useSearchParams();
  const [comments, setcomments] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());

    getComments();
  }, [videoId]);

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + videoId.get("v"));
    const json = await data.json();
    setcomments(json.items);
    
  };
  return (
    <div className="flex  justify-center px-14 m-2">
      <div className="flex flex-col">
        <div>
          <iframe
            width="750"
            height="400"
            src={
              "https://www.youtube.com/embed/" +
              videoId.get("v") +
              "?&autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-[750px]">
        <h4 className="font-bold text-lg m-2 p-2"> Comments: </h4>
        <hr/>
          {comments.map((i, index) => (
            <CommentsContainer key={'k'+index} data={i} />
          ))}
        </div>
      </div>
      <div className="w-full">
        <RelatedSuggestions />
      </div>
    </div>
  );
};

export default WatchPage;
