import React from "react";
import { SIDEBARDATA, SIDEBARDATA1 } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/redux/sideBarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    // m-2 p-5 w-max
    <div className=""  onBlur={()=> dispatch(closeMenu())}>
      <nav
        id="sidenav-2"
        className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-gray-10 dark:bg-black dark:text-white"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-mode="side"
        data-te-sidenav-content="#content"
       
      >
        <div className="flex ml-2 p-3">
        <span
          className=" pt-1 material-symbols-outlined cursor-pointer"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          menu
        </span>
        <Link to="/">
          <img
            onClick={() =>  dispatch(closeMenu())}
            className="pl-4 w-24"
            src="https://th.bing.com/th/id/R.0faa596df23dc2839e2e11153326a8c9?rik=SG2k903oBpVIjQ&riu=http%3a%2f%2fcdn04.androidauthority.net%2fwp-content%2fuploads%2f2017%2f08%2fnew-youtube-logo.jpg&ehk=y1C%2fuXpCZpXuzGNQdYXSsfx7g2jqs7dZWRnJXuhoK4U%3d&risl=&pid=ImgRaw&r=0"
            alt="logo"
          />
        </Link>
      </div>
        <ul className="w-full py-2">
          {SIDEBARDATA.map((i, index) => (
            <Link key={"a" + index} to={i.url}>
              <li className="m-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-3 rounded-lg">
                <span className="material-symbols-outlined ">{i.icon}</span>
                <span className="text-md pl-1">{i.tabName}</span>
              </li>
            </Link>
          ))}
        </ul>
        <hr />
        <ul className="py-2">
          {SIDEBARDATA1.map((i, index) => (
            <li
              key={"b" + index}
              className="m-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-3 rounded-lg"
            >
              <span className="material-symbols-outlined ">{i.icon}</span>
              <span className="text-md px-2">{i.tabName}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
