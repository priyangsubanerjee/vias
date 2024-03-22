import React from "react";

function Youtube() {
  return (
    <div className="lg:px-[96px] lg:pt-[90px] pb-[120px] bg-[#D7F3FF] px-6 py-[50px]">
      <iframe
        className="w-full lg:h-[460px] h-[250px]"
        src="https://www.youtube.com/embed/rKGdQfG3rjI"
        title="IKEA Kitchens Design Tour 2022"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Youtube;
