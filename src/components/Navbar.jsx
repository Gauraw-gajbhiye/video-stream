import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";

function Navbar() {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between bg-black text-white p-4 shadow-lg ">
      <div className="flex items-center space-x-4">
        <div onClick={handleToggle} className="cursor-pointer text-xl">
          ☰
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="logo"
          className="w-36 sm:w-36 md:w-36  ml-5"
        />
      </div>

      <div className="flex items-center space-x-4 w-full justify-between  ml-44 ">
        <div className="flex items-center border border-zinc-600 p-2 rounded-full w-full sm:w-[400px] md:w-[520px]">
          <input
            type="text"
            placeholder="Search"
            className="bg-black text-white w-full outline-none border-none placeholder:text-zinc-400"
          />
        </div>

        <div className="hidden sm:block sm:mt-0">
          <button className="border border-white px-3 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
