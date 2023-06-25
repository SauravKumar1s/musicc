import React from "react";
import { NewRealse, PlaySvg } from "@/svgicon";
import SongImage from "../../../public/assests/image 6.png";
import Image from "next/image";
import Typography from "../typography";

const BeastStore = () => {
  const playlist = [
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
  ];
  const smililarTrack = [
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
    {
      title: "Drake Type Beats",
      name: "Lowfied ",
      image: SongImage,
      icon: <NewRealse />,
    },
  ];
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h1 className=" text-center">
        <span className="text-white text-[80px] font-normal uppercase">
          Explore our{" "}
        </span>
        <span className="text-lime-300 text-[80px] font-normal uppercase">
          beatstore
        </span>
      </h1>

      <Typography variant="h2" className="mb-8 text-lg font-normal w-9/12 text-center text-stone-300 ">
      We know that finding the right beat for your project can be a challenge, which is why we offer our wide selection of beats, sorted by genre, mood, and tempo.
      </Typography></div>
      <div className="container flex justify-center items-center">
        <div className="  grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 gap-20 grid-cols-2  ">
          {playlist.map((song, i) => {
            return (
              <div
                key={i}
                className="sm:w-[208px] sm:h-[208px] rounded-2xl w-[143px] h-[143px]"
              >
                <div className=" flex justify-center items-center">
                  <Image
                    src={song.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white_300">
                  <h2>{song.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className="font-light">{song.name}</span>{" "}
                    <span className="font-light">{song.icon}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BeastStore;