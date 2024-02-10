import React from "react";

function Card ({image, title}) {
  return (
    <div className="bg-[#20283e] rounded-lg bg-transparent backdrop-blur-xl">
      <div className="w-full h-[85%]">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-white p-4">{title}</p>
    </div>
  );
}

export default Card;
