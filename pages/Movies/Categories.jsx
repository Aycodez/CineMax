'use client'
import { FaRegStar, FaStar } from "react-icons/fa";
import { useFetchGenresQuery } from "@/redux/api/genre";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setFilteredMovies,
  setMoviesFilter,
  setMovieYears,
  setUniqueYears,
} from "@/redux/features/movies/moviesSlice";
import { useGetAllMoviesQuery } from "@/redux/api/movie";
import { useEffect } from "react";

const Categories = () => {
  const { data: genres, refetch } = useFetchGenresQuery();
  const { data } = useGetAllMoviesQuery();

  const dispatch = useAppDispatch();
  const { moviesFilter } = useAppSelector((state) => state.movies);
  // if (!moviesFilter) return;
  const movieYears = data?.map((movie) => movie.year);
  const uniqueYears = Array.from(new Set(movieYears));

  useEffect(() => {
    dispatch(setMovieYears(movieYears));
    dispatch(setUniqueYears(uniqueYears));
  }, [data, dispatch]);

  const handleGenreChange = (genre) => {
    let filterByGenres = data.filter((movie) => movie.genre.includes(genre));
    if (moviesFilter?.selectedYear.length > 1) {
      filterByGenres = filterByGenres.filter(
        (movie) => +movie.year == +moviesFilter?.selectedYear
      );
    }

    dispatch(setMoviesFilter({ selectedGenre: genre }));
    dispatch(setFilteredMovies(filterByGenres));
  };

  const handleYearChange = (year) => {
    let filterByYear = data.filter((movie) => +movie.year == +year);
    if (String(moviesFilter?.selectedGenre.length) > 1) {
      filterByYear = filterByYear.filter((movie) =>
        movie.genre.includes(moviesFilter?.selectedGenre)
      );
    }

    dispatch(setMoviesFilter({ selectedYear: year }));
    dispatch(setFilteredMovies(filterByYear));
  };

  const handleRefresh = () => {
    dispatch(setMoviesFilter({ selectedYear: "" }));
    dispatch(setMoviesFilter({ selectedGenre: "" }));
    dispatch(setFilteredMovies(data));
  };

  return (
    <section className="lg:w-[30%] mb-5">
      <section className="bg-[#131722] py-5 pl-10 pr-5 text-white ">
        <div className="my-6">
          <h1 className="py-3 text-xl lg:text-3xl">Categories</h1>
          <hr className="border-t border-gray-800 h-0.5 w-full my-1" />
          <div className="flex flex-wrap gap-2">
            {genres?.map((genre, index) => (
              <div className="flex gap-2 my-1" key={index}>
                <button
                  onClick={(e) => handleGenreChange(e.target.value)}
                  value={genre.name}
                  className={
                    genre.name == moviesFilter.selectedGenre
                      ? `p-2 lg:text-sm text-[0.75rem]
                  rounded-xl bg-red-600 border-2 border-gray-500`
                      : `p-2 lg:text-sm text-[0.75rem] hover:bg-red-600 
                  transition-all ease-linear duration-500 rounded-xl 
                  bg-transparent border-2 border-gray-500`
                  }
                >
                  {genre.name}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleRefresh}
            className="px-4 py-1 hover:bg-red-600 transition-all ease-linear duration-500 rounded-xl bg-transparent border-2 border-gray-500"
          >
            All
          </button>
        </div>

        <div className="my-6">
          <h1 className="py-3 text-xl lg:text-3xl">Movies By Year</h1>
          <hr className="border-t border-gray-800 h-0.5 w-full my-1" />

          <div className="grid grid-cols-5 gap-2 mt-3">
            {uniqueYears?.map((year, index) => (
              <button
                onClick={(e) => handleYearChange(e.target.value)}
                value={year}
                key={index}
                className={
                  year == moviesFilter.selectedYear
                    ? `p-2 text-sm border border-white
                text-white  rounded-md text-center bg-red-700`
                    : `p-2 hover:bg-red-700 text-sm 
                hover:text-white text-red-600 rounded-md text-center bg-[#0b0e1787]`
                }
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        <div className="my-6 hidden lg:block text-yellow-500">
          <h1 className="py-3 text-3xl text-white">Filter by Ratings</h1>
          <hr className="border-t border-gray-800 h-0.5 w-full my-1" />
          <div className="flex justify-between my-2 items-center w-full">
            <div className="flex">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
            </div>
            <p>(3)</p>
          </div>

          <div className="flex justify-between my-2 items-center w-full">
            <div className="flex">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />

              <FaRegStar size={25} />
            </div>
            <p>(9)</p>
          </div>
          <div className="flex justify-between my-2 items-center w-full">
            <div className="flex">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />

              <FaStar size={25} />
              <FaStar size={25} />
              <FaRegStar size={25} />
              <FaRegStar size={25} />
            </div>
            <p>(34)</p>
          </div>

          <div className="flex justify-between my-2 items-center w-full">
            <div className="flex">
              <FaStar size={25} />
              <FaStar size={25} />

              <FaStar size={25} />
              <FaStar size={25} />
              <FaRegStar size={25} />
              <FaRegStar size={25} />
              <FaRegStar size={25} />
            </div>
            <p>(289)</p>
          </div>
        </div>
      </section>

      <div className="bg-[#131722] hidden lg:block p-5 mt-6 text-white ">
        <h1 className="py-3 text-3xl">Top 5 List</h1>
        <hr className="border-t border-gray-800 h-0.5 w-full my-1" />
        <ul className="grid grid-cols-2 gap-2 grid-rows-3">
          {data?.slice(0, 5).map((movie, index) => (
            <div key={index} className="flex items-center gap-3 border-b-2 border-gray-700">
              <span className="text-[3rem] mr-1">{index + 1}</span>
              <li className="flex flex-col items-start text-sm">
                <span>{movie.year}</span>
                <span className="font-semibold text-pretty text-[0.9rem]">
                  {movie.name}
                </span>
                <span className="text-red-600">{movie.genre[0]}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Categories;
