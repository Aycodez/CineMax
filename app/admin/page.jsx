"use client";
import AdminCard from "@/components/AdminCard";
import Loader from "@/components/Loader";
import {
  MdMovieFilter,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { useFetchGenresQuery } from "@/redux/api/genre";
import { useGetAllMoviesQuery } from "@/redux/api/movie";
import Link from "next/link";
import { useGetUsersQuery } from "@/redux/api/user";
import { FaUserFriends } from "react-icons/fa";

const Dashboard = () => {
  const { data: movies, isLoading } = useGetAllMoviesQuery();
  const { data: genres } = useFetchGenresQuery();
  const { data: users } = useGetUsersQuery();
  const chartItems = [
    {
      name: "Total Movies",
      icon: <MdMovieFilter />,
      amount: movies?.length,
      color: "orange-400",
    },
    {
      name: "Tv shows",
      icon: <MdOutlineVideoLibrary />,
      amount: 23,
      color: "",
    },
    {
      name: "All Genres",
      icon: <TbMovie />,
      amount: genres?.length,
      color: "blue-600",
    },
    {
      name: "Users",
      icon: <FaUserFriends />,
      amount: users?.length,
      color: "red-500",
    },
  ];
  return (
    <section className="p-1 lg:p-5 w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-2 lg:px-5 py-2">
        {chartItems.map((item, index) => (
          <AdminCard
            key={index}
            icon={item.icon}
            name={item.name}
            total={item.amount}
            color={item.color}
          />
        ))}
      </div>
      {isLoading ? (
        <div className="w-full flex flex-col justify-center items-center">
          <Loader />
          <p>Loading Movies from the database....</p>
        </div>
      ) : (
        <>
          <div className="fjc px-1 lg:px-5 mt-2 mb-5">
            <div className="fc">
              <div className="lg:h-8 h-4 rounded-lg w-2 border bg-red-600" />
              <h1 className="lg:text-3xl text-xl font-bold">
                Latest Movies ({movies?.length})
              </h1>
            </div>

            <Link
              href="/admin/movies/create"
              className="bg-red-500 hover:bg-red-700 font-semibold text-white p-2 lg:py-2 lg:px-3 shadow-md shadow-red-600 rounded-3xl"
            >
              Add movie
            </Link>
          </div>
          <div className="grid grid-cols-1 w-full my-5 gap-3">
            {movies?.slice(0, 5).map((movie) => (
              <div
                key={movie._id}
                className="p-2 flex gap-3 lg:fc w-full rounded-md overflow-hidden shadow-lg"
              >
                <img
                  src={movie.backgroundImage}
                  alt={movie.name}
                  className="lg:size-[200px] size-[150px]  object-center rounded-md"
                />
                <div className="fcjc h-full">
                  <div className="flex flex-col gap-[2px] ">
                    <h1 className="font-bold text-lg lg:text-xl">
                      {movie.name} ({movie.year})
                    </h1>

                    <p className=" font-semibold">{movie.genre.join(", ")}</p>
                    <p className="italic font-serif font-light text-[0.7rem] lg:text-[0.9rem] lg:w-5/6 lg:pr-3">
                      Storyline: {movie.detail}...
                    </p>
                  </div>

                  <div className="mt-3 text-[0.6rem] fc">
                    <Link
                      href={`/admin/movies/update/${movie._id}`}
                      className="bg-red-600 hover:bg-red-900 text-white font-bold p-1 lg:px-4  rounded-lg"
                    >
                      Update Movie
                    </Link>
                    <Link
                      href={`/admin/movies/delete/${movie._id}`}
                      className="bg-[#D3D3D3] hover:bg-slate-600 border border-black font-bold p-1 lg:px-4 rounded-lg"
                    >
                      Delete Movie
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <Link
        href="/admin/movies"
        className="bg-red-500 hover:bg-red-700 font-semibold mt-5 text-white py-2 px-3 shadow-md shadow-red-600 rounded-3xl"
      >
        Load more
      </Link>
    </section>
  );
};

export default Dashboard;
