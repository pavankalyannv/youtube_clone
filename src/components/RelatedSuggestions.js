import React, { useEffect, useState } from "react";
import { RELATED_SEARCH } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";
import { useSelector } from "react-redux";

const RelatedSuggestions = () => {
  //   const { id } = useSelector((store) => store.details);
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const [relatedResults, setRelatedResults] = useState([]);

  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  const getRelatedVideos = async () => {
    const data = await fetch(RELATED_SEARCH + videoId);
    const json = await data.json();
    setRelatedResults(json?.items);
  };

  return (
    <div className="my-1">
      {relatedResults?.map((video) => (
        <Link
          to={"/watch?v=" + video?.id?.videoId}
          key={video?.id?.videoId}
          value={video?.id}
        >
          <SuggestionCard videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedSuggestions;
