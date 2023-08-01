import React from "react";
import { useDispatch } from "react-redux";
import { SEARCH_TEXT_API } from "../utils/constants";
import { addvideos } from "../utils/redux/videoInfo";

const TagList = ({ list }) => {
  
  const fetchData = async (i) => {
    const data = await fetch(SEARCH_TEXT_API + i);
    const json = await data.json();
    console.log("tag", json.items, i);
    dispatch(addvideos(json.items));
  };
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center ">
      {list.map((i) => (
        <button
          className="px-2 h-9 text-sm w-auto m-2 border border-gray-200 rounded-xl bg-gray-300 dark:bg-black dark:text-white"
          onClick={() => {
            fetchData(i);
          }}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default TagList;
