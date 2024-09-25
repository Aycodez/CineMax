"use client";
import Results from "@/Apppages/Movies/Results";

const MovieResults = ({ params }) => {
  return (
    <section className="lg:w-[70%] text-white">
      <h1 className="text-3xl  p-3">{params.genre}</h1>
      <hr className="border-t border-gray-800 h-0.5 w-full my-1" />
      {params.genre && <Results genre={params.genre} />}
    </section>
  );
};

export default MovieResults;
