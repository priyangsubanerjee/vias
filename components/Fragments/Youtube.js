import React from "react";

function Youtube() {
  return (
    <div className="px-[96px] pt-[90px] pb-[120px] bg-[#D7F3FF]">
      <iframe
        className="w-full"
        height="460"
        src="https://www.youtube.com/embed/QFopfkk0I6U"
        title="IKEA Kitchens Design Tour 2022"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Youtube;
