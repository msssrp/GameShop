import React from "react";
import Card from "../category/Card";

function Recommend() {
  return (
    <div className="mt-9 md:mt-12 w-full h-full flex flex-col justify-center items-center">
      <div className="w-[330px] sm:w-[400px] md:w-[700px] lg:w-[950px]">
      <div className="self-start">
        <span className="text-2xl font-bold text-white">Reccommend</span>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <Card
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="test"
        />
        <Card
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="test"
        />
        <Card
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="test"
        />
        <Card
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="test"
        />
        <Card
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="test"
        />
        <Card
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="test"
        />
      </div>
      </div>
    </div>
  );
}

export default Recommend;
