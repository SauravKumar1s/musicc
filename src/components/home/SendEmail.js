import Image from "next/image";
import React from "react";
import Typography from "../typography";
import { Search } from "../search/Search";

const SendEmail = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Typography variant="h1" className="text-white mb-24 italic text-center">
        Join our community of musicians and take <br /> your music to the next
        level.
      </Typography>
      <Search/>
    </div>
  );
};

export default SendEmail;
