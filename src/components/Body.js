import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux/";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import TagList from "./TagList";

const list = [
  "T-series",
  "Pavan Kalyan",
  "Music",
  "Trending",
  "Cricket",
  "Live",
  "Sports",
  "Gaming",
  "Computer Science",
  "Trailers",
];

const Body = () => {
  const toggleMenu = useSelector((store) => store.sidbar.isOpen);
  return (
    <div>
      <Header />
      <div className="flex dark:bg-black dark:text-white">
        {toggleMenu && (
          <div className="w-50 shadow-xl">
            <Sidebar />
          </div>
        )}
        <div className="p-2 ml-1 dark:bg-black dark:text-white">
          <TagList list={list}/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
