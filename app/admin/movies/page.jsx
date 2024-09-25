"use client";
import Link from "next/link";
import { useGetAllMoviesQuery } from "@/redux/api/movie";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";

const AdminMoviesList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: movies, isLoading } = useGetAllMoviesQuery();

  const currentPage = searchParams.get("page") ?? "1";
  const itemsPerPage = searchParams.get("per_page") ?? "5";
  const start = (Number(currentPage) - 1) * Number(itemsPerPage);
  const end = start + Number(itemsPerPage);
  return isLoading ? (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Loader />
      <p>Loading Movies from the database....</p>
    </div>
  ) : (
    <div className="p-3 w-full">
      <div className="fjc">
        <div className="fc">
          <div className="h-8 rounded-lg w-2 border bg-red-600" />
          <h1 className="lg:text-3xl text-2xl font-bold">
            Published Movies ({movies?.length})
          </h1>
        </div>

        <Link
          href="/admin/movies/create"
          className="bg-red-500 hover:bg-red-700 font-semibold text-[0.7rem] lg:text-sm text-white py-2 px-2 lg:px-3 shadow-md shadow-red-600 rounded-xl"
        >
          Add movie
        </Link>
      </div>

      <div className="grid grid-cols-1 w-full mt-5 gap-3">
        {movies?.slice(start, end).map((movie) => (
          <div
            key={movie._id}
            className="p-2 lg:fc w-full rounded-md overflow-hidden shadow-lg"
          >
            <img
              src={movie.backgroundImage}
              alt={movie.name}
              className="lg:w-[300px] w-full h-[200px] object-center rounded-md"
            />
            <div className="lg:fcjc h-full">
              <div className="flex flex-col gap-[2px] ">
                <h1 className="font-bold text-xl">
                  {movie.name} ({movie.year})
                </h1>

                <p className=" font-semibold">{movie.genre.join(", ")}</p>
                <p className="italic font-serif font-light text-[0.9rem] lg:w-5/6 pr-3">
                  Storyline: {movie.detail}...
                </p>
              </div>

              <div className="mt-3 text-[0.8rem] fc">
                <Link
                  href={`/admin/movies/update/${movie._id}`}
                  className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4  rounded-lg"
                >
                  Update Movie
                </Link>
                <Link
                  href={`/admin/movies/delete/${movie._id}`}
                  className="bg-[#D3D3D3] hover:bg-slate-600 border border-black font-bold py-2 px-4 rounded-lg"
                >
                  Delete Movie
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-5">
        <button
          className="border px-4 py-2 mx-2 rounded-full"
          disabled={currentPage == 1}
          onClick={() =>
            router.push(
              `/admin/movies/?page=${Number(currentPage) - 1
              }&per_page=${itemsPerPage}`
            )
          }
        >
          {" "}
          Previous
        </button>

        <button
          className="border px-4 py-2 mx-2 rounded-full"
          disabled={currentPage == Math.ceil(movies?.length / itemsPerPage)}
          onClick={() =>
            router.push(
              `/admin/movies/?page=${Number(currentPage) + 1
              }&per_page=${itemsPerPage}`
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminMoviesList;
