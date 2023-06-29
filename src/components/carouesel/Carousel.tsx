"use client"
import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

function items() {
  var items = [
    {
      id: 1,
      alt: "Test1",
      ImageURL: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    },
    {
      id: 2,
      alt: "Test1",
      ImageURL: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    },
  ];

  return (
    <Carousel>
      {items.map((item) => (
        <Item key={item.id} ImageURL={item.ImageURL} Alt={item.alt} />
      ))}
    </Carousel>
  );
}

export default items;
