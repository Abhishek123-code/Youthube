import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_MENU,
  PROFILE_PIC,
  SEARCH_LOGO,
  SEARCH_LOGO_SMALL,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [queryValue, setQueryValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //API call
    // console.log("query value changed - " + queryValue);
    const timer = setTimeout(() => {
      if (searchCache[queryValue]) setSuggestions(searchCache[queryValue]);
      else getSearchSuggestions();
    }, 200);
    //Make an API call after every key press
    //But if the difference between two API calls is less than 200ms,
    //then decline the API call

    return () => {
      clearTimeout(timer);
    };
  }, [queryValue]);

  /**
   *
   * key - i
   * - rendering the component
   * - useEffect()
   * -start timer =>make api call after 200ms
   *
   * key - ip
   * - destroy the component(useEffect return method)
   * - re- render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   */

  const getSearchSuggestions = async () => {
    // console.log("API called - " + queryValue);
    const data = await fetch(YOUTUBE_SEARCH_API + queryValue);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({ [queryValue]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2">
      <div className="flex col-span-1 items-center">
        <div onClick={() => toggleMenuHandler()}>{HAMBURGER_MENU}</div>
        <img
          className="h-5 px-5"
          alt="YoutubeLogo"
          src="/src/assets/yt_logo_rgb_light.png"
        />
      </div>
      <div className="col-span-10 flex items-center relative">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            value={queryValue}
            onChange={(e) => setQueryValue(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="px-5 w-1/2 border border-gray-400 p-1.5 rounded-l-full"
          />
          <button className="border border-gray-400 p-1.5 rounded-r-full bg-gray-100">
            {SEARCH_LOGO}
          </button>
        </div>

        {showSuggestions && (
          <div className=" absolute top-full mt-2 bg-white py-2 pt-4 w-[34rem] rounded-lg shadow-lg border-gray-300 border border-t-0">
            <ul className="font-medium">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex items-center py-1 hover:bg-gray-200 px-5"
                >
                  {SEARCH_LOGO_SMALL} {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 items-center ">{PROFILE_PIC}</div>
    </div>
  );
};

export default Head;
