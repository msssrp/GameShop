import React from "react";
import { Paper, Button } from "@mui/material";
import Image from "next/image";

interface ItemProps {
  key: number;
  ImageURL: string;
  Alt: string;
}

function Item(item: ItemProps) {
  return (
    <div className="w-full h-[19rem] mt-0 sm:mt-6 md:mt-9 flex flex-col justify-center items-center">
      <Paper className="h-[200px] sm:h-full w-[300px] sm:w-[550px] md:w-[700px] lg:w-[800px] rounded-lg">
        <Image
          width={0}
          height={0}
          src={item.ImageURL}
          alt={item.Alt}
          className="rounded-md"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Paper>
    </div>
  );
}

export default Item;
