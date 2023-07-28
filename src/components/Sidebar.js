import React from "react";
import { SIDEBARDATA, SIDEBARDATA1} from "../utils/constants";

const Sidebar = () => {

  return (
    <div className="m-2 p-5 w-max">
      <ul className="w-full py-2">
        {SIDEBARDATA.map((i) => (
          <li className="m-1 cursor-pointer hover:bg-gray-100 px-3 rounded-lg">
            <span className="material-symbols-outlined ">{i.icon}</span>
            <span className="text-md pl-1">{i.tabName}</span>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="py-2">
        {SIDEBARDATA1.map((i) => (
          <li className="m-1 cursor-pointer hover:bg-gray-100 px-3 rounded-lg">
            <span className="material-symbols-outlined ">{i.icon}</span>
            <span className="text-md px-2">{i.tabName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
