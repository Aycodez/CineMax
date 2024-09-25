"use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative hidden lg:block w-full h-[450px] lg:h-screen">
      <div className="absolute -z-10 w-full h-full text-white">
        <Image
          src={movie?.backgroundImage}
          fill
          className="w-full brightness-95 h-full object-fill"
          alt="Image of movie"
        />
        {/* <img src={movie?.image}  lassName='w-full brightness-50 h-full object-contain' alt='Image of movie'/> */}
      </div>
      <div className="wrapper mx-auto text-white h-full flex max-w-[1200px]">
        <div className="pt-5 h-full flex-col flex lg:pt-[15rem] gap-8">
          <h1 className="text-2xl lg:text-[5rem]">{movie?.name}</h1>

          <div className="w-[80%]">
            <span>{movie?.detail}</span>
          </div>

          <div className="flex gap-3">
            <button className="bg-[red] font-semibold py-4 px-10 rounded-md">
              WATCH NOW
            </button>
            <button
              className="bg-transparent border-2 
                    rounded-md font-semibold border-white py-4 px-10"
            >
              +PLAYLIST
            </button>
          </div>
        </div>
        <div className="lg:pt-[18rem] pr-20">
          <button className="p-8 border-2 mr-32 text-red-600 border-white rounded-full">
            <FaPlay size={90} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
