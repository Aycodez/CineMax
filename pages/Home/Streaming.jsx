import StreamingSlider from "@/components/StreamingSlider";
const Streaming = ({ movies }) => {
  return (
    <section className="px-5 lg:px-10 py-6 mt-6 max-w-[1200px] mx-auto flex flex-col">
      <div className="flex gap-2 lg:gap-4 items-start font-semibold text-gray-500">
        <span className="text-red-600">Today </span>
        <span>/</span>
        <span>This week </span>
        <span>/ </span>
        <span>Last 30 days </span>
      </div>

      <div className="flex w-full mt-8">
        <StreamingSlider movies={movies} />
        <div className="lg:-ml-12 pt-10">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            New Shows Just For You
          </h1>
          <p className="pt-16 pl-3 text-gray-500 font-semibold">
            VIEW ALL {">"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Streaming;
