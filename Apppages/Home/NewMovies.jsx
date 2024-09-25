import FMoviesSlider from "@/components/FMoviesSlider";
import Image from "next/image";

const NewMovies = ({ data, movies }) => {
  const d1 = movies?.slice(0, 4);
  const d2 = movies?.slice(6, 10);
  const movie = movies?.[9];
  return (
    <>
      <section className="bg-[#131722] px-5 lg:px-10 py-6">
        <div className="flex max-w-[1200px] mx-auto mt-10">
          <div className="pt-10">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              Featured TV Episodes
            </h1>
          </div>
          <FMoviesSlider slides={4} movies={data} />
        </div>
      </section>
      <section className="bg-[#131722] text-white px-5 lg:px-10 py-6">
        <div className="wrapper w-full flex flex-col lg:flex-row gap-10 max-w-[1200px] mx-auto mt-10">
          <div className="lg:w-[40%] bg-[#1f263b] px-10 py-5">
            <h1 className="text-4xl font-semibold border-b-2 pb-2 border-gray-700">
              Top 10 this week
            </h1>
            {/* <span className='border-b-2 border-gray-300 w-full'></span> */}
            <ul>
              {movies?.map((movie, index) => (
                <div key={index} className="flex items-center gap-3 border-b-2 border-gray-700">
                  <span className="text-[5rem] mr-5">{index + 1}</span>
                  <li className="flex flex-col items-start">
                    <span>{movie.year}</span>
                    <span className="font-bold text-lg">{movie.name}</span>
                    <span className="text-red-600">
                      {movie.genre.join(" ")}
                    </span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="lg:w-[60%] mt-5 lg:mt-16">
            <h1 className="text-4xl font-semibold border-b-2 pb-2 border-gray-700">
              Newest Movies
            </h1>
            <div className="flex pt-5 h-[200px] lg:h-[300px] gap-7 items-center ">
              <div className="w-[150px] lg:w-[200px] h-full">
                <Image
                  width={200}
                  height={300}
                  src={movie?.image}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex-col flex">
                <p>{movie?.year}</p>
                <h1 className="font-bold text-2xl mb-5">{movie?.name}</h1>
                <div className="flex gap-3 text-white">
                  <button className="bg-[red] font-semibold p-2 rounded-md">
                    WATCH NOW
                  </button>
                  <button
                    className="bg-transparent border-2  text-sm
                                    rounded-md font-semibold border-white p-2"
                  >
                    +PLAYLIST
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-28 mt-5">
              <ul>
                {d1?.map((movie, index) => (
                  <div key={index} className="flex items-center sm:h-[150px] lg:h-[200px] gap-3 my-3 pb-2 border-b-2 border-gray-700">
                    <div className="w-[100px] lg:w-[150px] h-full">
                      <Image
                        width={150}
                        height={150}
                        src={movie.image}
                        className="size-full object-cover"
                      />
                    </div>
                    <li className="flex flex-col items-start">
                      <span>{movie.year}</span>
                      <span className="font-bold text-lg mb-4">
                        {movie.name}
                      </span>
                      <span className="text-red-600">
                        {movie.genre.join(", ")}
                      </span>
                    </li>
                  </div>
                ))}
              </ul>
              <ul className="lg:border-l-2 border-gray-800 lg:px-3">
                {d2?.map((movie, index) => (
                  <div key={index} className="flex items-center sm:h-[150px] lg:h-[200px] gap-3 my-3 pb-2 border-b-2 border-gray-700">
                    <div className="w-[100px] lg:w-[150px] h-full">
                      <Image
                        width={150}
                        height={150}
                        src={movie.image}
                        className="size-full object-cover"
                      />
                    </div>
                    <li className="flex flex-col items-start">
                      <span>{movie.year}</span>
                      <span className="font-bold text-lg mb-4">
                        {movie.name}
                      </span>
                      <span className="text-red-600">
                        {movie.genre.join(", ")}
                      </span>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewMovies;
