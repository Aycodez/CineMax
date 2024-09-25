import React from "react";
import { ImYoutube } from "react-icons/im";
import Link from 'next/link'

const HeaderMovieCard = ({ movie }) => {

  return (
    <div className="relative w-full h-[450px] lg:h-screen">
      <div className="absolute -z-10 pt-10 lg:pt-12 w-full h-full text-white">
        <img
          src={movie?.backgroundImage}
          className="w-full brightness-95 h-full object-cover"
          alt="Image of movie"
        />
      </div>
      <div className="wrapper mx-auto h-full flex justify-between gap-10 max-w-[1200px]">
        <div className="pl-10 h-full flex-col flex pt-[10rem] lg:pt-[17rem] gap-4">
          <div className="flex gap-2">
            <span className="border-2 border-red-600"></span>
            <p className="text-gray-400 lg:text-2xl">NEW RELEASES</p>
          </div>

          <h1 className="text-4xl lg:text-[5rem]">{movie?.name}</h1>

          <div className="flex items-center gap-4 lg:text-xl">
            <span>
              {movie?.year} | {movie?.genre.join(", ")} | {movie?.duration}
            </span>
          </div>

          <div className="flex gap-3">
            <Link
              href={`/watch/${movie?._id}`}
              className="bg-[red] py-3 px-3 text-sm lg:px-6 gap-3 flex items-center rounded-md"
            >
              <ImYoutube size={20} />
              <p>WATCH TRAILER</p>
            </Link>
            <button className="bg-transparent border-2 text-sm rounded-md font-semibold border-white py-3 px-7 lg:px-10">
              +PLAYLIST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMovieCard;
