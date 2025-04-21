import React from "react";

function ButtonContainer() {
  const name = ["All", "Music", "News", "Podcast", "APIs", "Dramedy"];
  return (
    <div className="flex ">
      {name.map((data) => (
        <div className="px-3 py-1 mx-1 border border-white rounded-md bg-zinc-800 border-none">
          <button>{data}</button>
        </div>
      ))}
    </div>
  );
}

export default ButtonContainer;
