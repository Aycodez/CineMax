"use client";
import Results from "@/Apppages/Movies/Results";

const Movies = () => {
  
  return (
    <div className="lg:w-[70%] w-full text-white lg:mb-5">
      <h1 className="text-2xl p-2">Movies</h1>
      <hr className="border-t border-gray-800 h-0.5 w-full my-1" />
      <Results />
    </div>
  );
};
export default Movies;

// export const generateMetadata = {
//     title: "CineMax - Movies",
//     description: "Movie collections in the database",
//   };
