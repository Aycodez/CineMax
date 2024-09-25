"use client";
import { LuArrowUpDown } from "react-icons/lu";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbMenuDeep } from "react-icons/tb";
import ColumnView from "./ColumnView";
import RowView from "./RowView";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setMoviesFilter,
  setFilteredMovies,
} from "@/redux/features/movies/moviesSlice";
import { useEffect } from "react";

const Results = ({ genre }) => {
  const [view, setView] = useState("flex");
  const viewOptions = [
    "Latest",
    "From A to Z",
    "From Z to A",
    "Ratings",
    "Menu Order",
  ];

  const dispatch = useAppDispatch();
  const { filteredMovies } = useAppSelector((state) => state.movies);
  useEffect(() => {
    if (genre) {
      let filterByGenres = filteredMovies.filter((movie) =>
        movie.genre.includes(genre)
      );

      dispatch(setMoviesFilter({ selectedGenre: genre }));
      dispatch(setFilteredMovies(filterByGenres));

      return;
    }
  }, [genre]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setView(value);
  };
  const changeGrid = () => {
    setView("grid");
  };
  const changeFlex = () => {
    setView("flex");
  };

  return (
    <section className="w-full px-2 text-white">
      <div className="flex justify-between">
        <div className="lg:flex hidden  items-center gap-5">
          <div className="flex gap-2">
            <label htmlFor="Ultra">4K Ultra</label>
            <input
              type="checkbox"
              className="w-6 
                     border-2  border-gray-400"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="Ultra">Brother</label>
            <input
              type="checkbox"
              className="size-6 
                     border-2 border-gray-400"
            />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button onClick={changeFlex}>
            {" "}
            <CgMenuGridO size={28} />
          </button>
          <button onClick={changeGrid}>
            {" "}
            <TfiMenuAlt size={25} />
          </button>
          <TbMenuDeep size={27} />
        </div>

        <div className="flex ml-5 items-center p-1">
          <LuArrowUpDown size={20} />
          <select
            name="genre"
            value={view}
            onChange={handleChange}
            className="font-semibold py-2 text-white text-[1.1rem] bg-transparent"
          >
            {viewOptions.map((options, index) => (
              <option
                className="px-3 py-2 text-[1.1rem] font-semibold bg-[#0b0e17]"
                key={index}
                value={options}
              >
                {options}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filteredMovies.length > 0 ? (
        view == "grid" ? (
          <ColumnView data={filteredMovies} />
        ) : (
          <RowView data={filteredMovies} />
        )
      ) : (
        <div className="h-screen w-full justify-center items-center">
          <h1 className="m-20 text-3xl">No movies Found...</h1>
        </div>
      )}
    </section>
  );
};

export default Results;
