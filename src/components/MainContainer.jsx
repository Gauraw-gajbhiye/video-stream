import React from "react";
import ButtonContainer from "./ButtonContainer";
import VideoContainer from "./VideoContainer";

function MainContainer() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <ButtonContainer />
      <VideoContainer />
    </div>
  );
}

export default MainContainer;
