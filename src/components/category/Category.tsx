import React from "react";
import Card from "./Card";

function Category() {
  const cardLen = [
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "test",
    },
  ];

  return (
    <div className="mt-9 md:mt-12 w-full h-full flex flex-col justify-center items-center">
    <div className="w-[330px] sm:w-[400px] md:w-[700px] lg:w-[950px]">
    <div className="self-start">
      <span className="text-2xl font-bold text-white">Game</span>
    </div>
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {cardLen.map(res=>(
        <Card src={res.src} alt={res.alt}/>
      ))}
    </div>
    </div>
  </div>
  );
}

export default Category;
