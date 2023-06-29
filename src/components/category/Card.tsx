import React from "react";
import Image from "next/image";

interface cardProps {
  src: string;
  alt: string;
}

function Card({ src, alt }: cardProps) {
  return (
    <div className="w-[10rem] sm:w-[12rem] md:w-[14rem] max-h-[22rem] md:mb-2 mt-7 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <div className="w-full h-[75%] md:h-[75%]">
        <Image
          width={0}
          height={0}
          src={src}
          alt={alt}
          className="rounded-t-md"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="w-full h-[25%] flex justify-center items-center">
        <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Valorant
        </h5>
      </div>
    </div>
  );
}

export default Card;
