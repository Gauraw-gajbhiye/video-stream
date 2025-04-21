import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const toggle = useSelector((store) => store.app.isMenuOpen);
  if (!toggle) return <></>;
  return (
    <div className=" w-48 p-4 my-1  h-screen ">
      <div className="border-b-[1px]  p-3 border-zinc-700">
        <div className="p-2 text-sm" to="/">
          Home
        </div>

        <div className="p-2 text-sm">Shorts</div>
        <div className="p-2 text-sm">Subscriptions</div>
      </div>
      <div className="border-b-[1px] p-3 border-zinc-700">
        <div className="p-2 text-sm">History</div>
        <div className="p-2 text-sm">Playlists</div>
        <div className="p-2 text-sm">Your Videos</div>
        <div className="p-2 text-sm">Watch Later</div>
        <div className="p-2 text-sm">Liked videos</div>
        <div className="p-2 text-sm">Downloads</div>
      </div>
    </div>
  );
}

export default Sidebar;
