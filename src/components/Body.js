import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux/";
import VideoContainer from "./VideoContainer";

const Body = () => {
  const toggleMenu = useSelector((store) => store.sidbar.isOpen);
  return (
    <div className="flex">
      <div className="w-60 shadow-xl">{toggleMenu && <Sidebar />}</div>
      <div className="p-2 ml-5"> <VideoContainer /></div>
    </div>
  );
};

export default Body;
