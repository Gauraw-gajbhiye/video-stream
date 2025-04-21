import React from "react";

function VideoCard({ info }) {
  console.log("in", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="rounded w-[310px] p-2 m-2 ">
      <img className="" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
}

export default VideoCard;
