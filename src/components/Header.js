import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "../utils/redux/sideBarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addCache } from "../utils/redux/searchSlice";
import { Link } from "react-router-dom";
import { searchText } from "../utils/redux/videoInfo";
import Switcher from "./Switcher";

const Header = () => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchHandler = async () => {
    const results = await fetch(YOUTUBE_SEARCH_API + searchInput);
    const json = await results.json();
    setSuggestions(json[1]);
    dispatch(addCache({ [searchInput]: json[1] }));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSuggestions(searchCache[searchInput]);
      } else {
        searchHandler();
      }
    }, 200);

    return () => clearInterval(interval);
  }, [searchInput]);

  const searchByItem = (item) => {
    setShowSuggestions(false);
    setSearchInput(item);
    dispatch(searchText(item));
  };

  return (
    <div className=" w-full shadow-lg flex justify-between ">
      <div className="flex ml-2 p-3" onBlur={() => dispatch(closeMenu())}>
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
            onClick={() => dispatch(closeMenu())}
            className="pl-4 w-24"
            src="https://th.bing.com/th/id/R.0faa596df23dc2839e2e11153326a8c9?rik=SG2k903oBpVIjQ&riu=http%3a%2f%2fcdn04.androidauthority.net%2fwp-content%2fuploads%2f2017%2f08%2fnew-youtube-logo.jpg&ehk=y1C%2fuXpCZpXuzGNQdYXSsfx7g2jqs7dZWRnJXuhoK4U%3d&risl=&pid=ImgRaw&r=0"
            alt="logo"
          />
        </Link>
      </div>
      <div className="p-3 flex">
        <div className="w-[400px] border border-gray-200 rounded-l-full p-2  shadow-md h-10  border-r-0 flex ">
          <input
            type="text"
            className="w-[400px] outline-0 px-3"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search"
          />

          {searchInput !== "" && (
            <span
              className="material-symbols-outlined cursor-pointer hover:bg-gray-200 rounded-full   "
              onClick={() => {
                setSearchInput("");
                setShowSuggestions(false);
              }}
            >
              close
            </span>
          )}
        </div>
        <div>
          <Link to={"/results?search_query=" + searchInput}>
            <div
              onClick={() => {
                searchByItem(searchInput);
                setShowSuggestions(false);
              }}
              className="material-symbols-outlined border p-1 h-10 w-10 cursor-pointer bg-gray-100 border-gray-600 rounded-r-full"
            >
              search
            </div>
          </Link>
        </div>
        {showSuggestions && (
          <div
            onFocus={() => {
              if (searchInput.length != null) setShowSuggestions(true);
            }}
            className="absolute mt-11 p-2 w-[400px] h-[300px] bg-white border border-gray-600 rounded-xl"
          >
            <ul className="">
              {suggestions?.map((item) => (
                <>
                  <Link to={"/results?search_query=" + item}>
                    <div
                      key={item}
                      className="flex hover:bg-gray-200"
                      onClick={() => searchByItem(item)}
                    >
                      <span
                        className="material-symbols-outlined pt-1"
                        width="25"
                      >
                        search
                      </span>
                      <li className="ml-2 text-lg">{item}</li>
                    </div>
                  </Link>
                </>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Switcher />
      <div>
        <img
          className="style-scope yt-img-shadow rounded-full m-4"
          alt="Avatar"
          height="32"
          width="32"
          src="https://yt3.ggpht.com/yti/AOXPAcXpCC9duPy5Iu6QbeOtBN3PMLM7uwbbEWtr4TnWpQ=s88-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </div>
  );
};

export default Header;
