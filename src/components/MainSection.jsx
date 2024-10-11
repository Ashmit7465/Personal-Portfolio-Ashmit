import React from "react";
import { HERO_CONTENT } from "../constants";
import myImage from "../assets/myImage.png"

const MainSection = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-36">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
          Ashmit Shukla
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Full Stack Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tight">
            {HERO_CONTENT}
          </p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="mb-20 flex justify-center">
            <img src={myImage} alt="myImage" className="h-[500px] w-[420px] rounded-xl"/>
          </div>
        </div>
    </div>
  </div>
};

export default MainSection;
