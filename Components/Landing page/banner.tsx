// components/Banner.js
import React from "react";

const Banner = () => {
  return (
    <section className=" relative bg-black  rounded-xl lg:w-full lg:h-[400px] w-full h-40  ">
      <img
        src="/thar.png" // Replace with your image path
        alt="Banner Image" 
        className="absolute rounded-lg inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0flex  sm:w-full m-0 p-0 ">
        <div className="text-white text-center">
         
        </div>
      </div>
    </section>
  );
};

export default Banner;
