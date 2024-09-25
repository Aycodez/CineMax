"use client";
import Image from "next/image";
import ForYouMovieCard from "./ForYouMovieCard";
// import { useGetSpecificMovieQuery } from '@/redux/api/movie';

const TvShows = ({ movies, coverPoster }) => {
  // const {data: coverPoster} = useGetSpecificMovieQuery("66e4c995caae3a2df54f561b")
  return (
    <>
      <section className="relative w-full h-[400px] lg:h-screen">
        <div className="absolute -z-10 w-full h-full text-white">
          <Image
            src={coverPoster?.backgroundImage}
            fill
            className="w-full brightness-90 h-full object-cover"
            alt="Image of movie"
          />
        </div>
        <div className="wrapper mx-auto text-white h-full w-full flex max-w-[1200px]">
          <div className="pt-5 gap-3 h-full w-full flex-col flex items-center justify-center lg:pt-[5rem] lg:gap-8">
            <h1 className="text-2xl lg:text-6xl">{coverPoster?.name}</h1>
            <p className="text-center lg:text-xl font-light">
              New Season 3 just flew in <br />
              Watch and Debate
            </p>
            <div className="flex gap-4 font-semibold">
              <p className="text-red-600">Season 1</p>
              <p>Season 2</p>
              <p>Season 3</p>
            </div>

            <div className="grid grid-cols-5 gap-3 w-full px-2 lg:w-[80%]">
              {movies?.slice(0, 5).map((movie, i) => (
                <div key={i} className="h-[130px] lg:h-[200px] w-full">
                  <Image
                    src={movie.image}
                    width={200}
                    height={200}
                    className="w-full 
                          h-full object-contain lg:object-cover"
                    alt="Image of movie"
                  />
                  <p className="text-sm lg:text-[1rem] text-red-600">S03E03</p>
                  <p>{movie.name.slice(0, 9)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e9eb] shadow-md flex-col py-8 flex items-center -z-20 px-5">
        <div className=" w-full lg:px-7 grid lg:grid-cols-6 gap-2 grid-cols-2">
          <div className="flex flex-col lg:col-span-2 py-5 justify-center">
            <h1 className="lg:text-5xl text-4xl font-semibold">
              Popular TV Series Right Now
            </h1>
          </div>
          {movies?.map((movie,i) => (
            <ForYouMovieCard key={i} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TvShows;
