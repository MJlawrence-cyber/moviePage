import React from "react";

function NavBar() {
  return (
    <div className="w-full h-[80px] flex justify-between items-center text-white mb-[180px]">
      <div>
        <span></span>
        <svg
          width="29"
          height="32"
          viewBox="0 0 29 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7441 11.7628L8.2201 0.768C4.9033 -1.3128 0.600098 1.0796 0.600098 5.0052V26.9948C0.600098 30.92 4.9033 33.3128 8.2201 31.232L25.7441 20.2372C28.8637 18.2796 28.8637 13.7204 25.7441 11.7628Z"
            fill="#7B6EF6"
          />
        </svg>
      </div>
      <div className="flex justify-between items-center gap-2">
        <p>Movies</p>
        <p>TV Shows</p>
        <p>Suggest me <span></span></p>
      </div>
    </div>
  );
}

export default NavBar;
