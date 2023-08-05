import React from "react";
import "./Head.css";
// Import Swiper React components

const Head = () => {
  return (
    <div className="header ">
      <div className="header-text lg:ms-40 sm:ms-12 md:ms-12">
        <h1 className="lg:text-5xl sm:text-xl md:text-2xl mb-12 heading">
          Discover amazing photographs and let the photos live.
        </h1>
        <p className="lg:text-xl mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nobis
          reiciendis vero ullam suscipit, inventore corrupti at earum soluta
          quibusdam ducimus ad quo fugit iusto illum fugiat deserunt laudantium
          nihil!
        </p>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg explore-btn">
          Login To Explore
        </button>
      </div>
    </div>
  );
};

export default Head;
