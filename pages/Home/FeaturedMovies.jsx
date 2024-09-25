import FMoviesSlider from "@/components/FMoviesSlider";
import StreamingSlider from "@/components/StreamingSlider";
const FeaturedMovies = ({ d1, d2 }) => {
  return (
    <>
      <section className="px-5 bg-[#131722]">
        <div className="lg:px-10 py-6 flex mx-auto w-full max-w-[1200px]">
          {d1 && <StreamingSlider movies={d1} />}
          <div className="lg:-ml-12 pt-10">
            <h1 className="text-2xl lg:text-4xl text-white font-semibold">
              Action & Drama Movies
            </h1>
            <p className="pt-[68px] pl-2 text-gray-500 font-semibold">
              VIEW ALL {">"}
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 bg-[#0a0d14]">
        <div className="py-6 flex justify-evenly mx-auto w-full max-w-[1200px]">
          <div className="pt-10 ">
            <h1 className="text-2xl lg:text-3xl text-white font-semibold">
              Funniest Comedy Movies of 2024
            </h1>
            <p className="pt-16 text-gray-500 font-semibold">VIEW ALL {">"}</p>
          </div>

          {d2 && <FMoviesSlider movies={d2} />}
        </div>
      </section>
    </>
  );
};

export default FeaturedMovies;
