import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/sideBarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addCache } from "../utils/redux/searchSlice";

const Header = () => {
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
      searchHandler();
    }, 200);

    return () => clearInterval(interval);
  }, [searchInput]);

  return (
    <div className="w-full shadow-lg flex justify-between">
      <div className="flex ml-2 p-3">
        <span
          className=" pt-1 material-symbols-outlined cursor-pointer"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          menu
        </span>
        <img
          className="pl-4 w-24"
          src="https://th.bing.com/th/id/R.0faa596df23dc2839e2e11153326a8c9?rik=SG2k903oBpVIjQ&riu=http%3a%2f%2fcdn04.androidauthority.net%2fwp-content%2fuploads%2f2017%2f08%2fnew-youtube-logo.jpg&ehk=y1C%2fuXpCZpXuzGNQdYXSsfx7g2jqs7dZWRnJXuhoK4U%3d&risl=&pid=ImgRaw&r=0"
          alt="logo"
        />
      </div>
      <div className="p-3">
        <div className="flex">
          <input
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-[400px] h-auto border border-gray-600 rounded-l-full px-5"
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />

          <div className="material-symbols-outlined border p-2 bg-gray-100 border-gray-600 rounded-r-full">
            search
          </div>
        </div>
       {showSuggestions && <div className="fixed mt-1 p-2 w-[400px] h-[300px] bg-gray-100 border border-gray-600 rounded-2xl">
          <ul className="">
            {suggestions.map((item) => (
              <li className="flex">
                <span class="material-symbols-outlined pt-1" width="25">
                  search
                </span>{" "}
                <p className="ml-2 text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>}
      </div>
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
