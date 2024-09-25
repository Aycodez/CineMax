import ForYouMovieCard from "./ForYouMovieCard";

const ShowsForYou = ({ movies }) => {
  return (
    <section className="bg-[#131722] shadow-md flex-col py-8 flex items-center -z-20 text-white px-5">
      <div className="w-full lg:px-7 grid lg:grid-cols-7 grid-cols-2 gap-2">
        <div className="flex flex-col lg:col-span-2 py-5 justify-end">
          <h1 className="lg:text-5xl text-4xl text-pretty font-semibold">
            Popular Movies To Watch Now
          </h1>
          <p className="pb-4 text-gray-500">Most watched movies by days</p>

          <hr className="bg-gray-400  text-gray-400" />
          <span className="pt-1 text-gray-500">VIEW ALL {">"}</span>
        </div>
        {movies?.map((movie, index) => (
          <ForYouMovieCard key={index} movie={movie} />
        ))}
      </div>
      <span className="border-b-[1px] my-14 border-gray-500 w-full"></span>
      <button className="-mt-20 mb-7 bg-[#131722] z-50 border-2 border-gray-500 font-semibold py-3 px-5 lg:px-10 gap-3 flex transition-all duration-300 ease-linear hover:bg-transparent hover:scale-95 hover:border-2 items-center">
        +View more
      </button>
    </section>
  );
};
export default ShowsForYou;
