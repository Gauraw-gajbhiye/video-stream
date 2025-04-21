import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="flex bg-black text-white min-h-full w-full">
      <Sidebar />
      <div className="flex-1 h-full ">
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
