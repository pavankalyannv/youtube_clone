import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux/";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const toggleMenu = useSelector((store) => store.sidbar.isOpen);
  return (
    <div>
      <Header />
      <div className="flex">
        {toggleMenu && (
          <div className="w-50 shadow-xl">
            <Sidebar />
          </div>
        )}
        <div className="p-2 ml-1">
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
