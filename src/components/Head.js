import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {

  const dispatch = useDispatch();

  const toggleEventHandler = ()=> {
        dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col px-2 items-center border shadow-md">
      <div className="flex col-span-2 items-center gap-2">
        <img
          onClick={() => toggleEventHandler()}
          className="h-5 cursor-pointer"
          alt="hamburger"
          src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
        />
        <img
          className="h-20"
          alt="logo"
          src="https://www.gstatic.com/marketing-cms/assets/images/ea/a0/dce178134c00bef44247a87803cb/yt-external-thumbnail-logo-01.jpg=n-w1920-h1080-fcrop64=1,00000000ffffffff-rw"
        />
      </div>

      <div className="col-span-8">
        <input
          className="h-15 w-3/4 border border-gray-300 rounded-l-full py-1 px-2"
          type="text"
          placeholder="Search"
        />
        <button className="h-15 w-10 border border-gray-200 rounded-r-full p-1 bg-gray-300 ">
         🔍
        </button>
      </div>

      <div className="col-span-2">
        <img
          className="h-7"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/709/709699.png"
        />
      </div>
    </div>
  );
};

export default Head;
