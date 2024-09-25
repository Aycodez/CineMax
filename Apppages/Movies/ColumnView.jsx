import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const ColumnView = ({ data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";
  const itemsPerPage = searchParams.get("per_page") ?? "5";
  const start = (Number(currentPage) - 1) * Number(itemsPerPage);
  const end = start + Number(itemsPerPage);

  return (
    <div className="movies-container grid grid-cols-1">
      {data?.slice(start, end).map((movie, index) => (
        <div
          key={index}
          className="flex w-full lg:gap-3 py-3 border-b-2 border-gray-700"
        >
          <div className="w-[150px] h-[200px] px-1">
            <Image
              src={movie.image}
              height={200}
              width={200}
              className="size-full object-cover"
              alt="Movie name"
            />
          </div>
          <div className="flex-col flex-1 flex gap-2 px-3 lg:mr-10">
            <div>
              <p className="text-gray-600 ">
                {movie.year},{movie.genre.join(", ")}
              </p>
              <h1 className="font-bold">{movie.name}</h1>
            </div>

            <p className="text-[0.75rem] lg:text-[1rem]">
              {movie.detail.slice(0, 120)}...
            </p>

            <div className="flex gap-3 text-white text-[0.75rem] lg:text-sm mt-3">
              <button className="bg-gray-700 hover:opacity-50 font-semibold p-2 lg:py-3 lg:px-5 rounded-md">
                WATCH NOW
              </button>
              <button
                className="bg-transparent duration-300 ease-linear 
                    rounded-md font-semibold hover:bg-red-500 p-2 lg:py-3 lg:px-5"
              >
                +PLAYLIST
              </button>
            </div>
          </div>
          <div className="flex gap-1 mt-6 text-sm text-gray-600">
            <FaStar size={30} />
            <p className="text-center">
              1 <br />
              Vote
            </p>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center mt-5">
        <button
          className="border px-4 py-2 mx-2 active:bg-red-600
           hover:bg-red-500 ease-linear duration-100 rounded-2xl"
          disabled={currentPage == 1}
          onClick={() =>
            router.push(
              `/movies/?page=${
                Number(currentPage) - 1
              }&per_page=${itemsPerPage}`
            )
          }
        >
          {" "}
          Previous
        </button>
        <button
          className="border px-4 py-2 mx-2 active:bg-red-600
           hover:bg-red-500 ease-linear duration-100 rounded-2xl"
          disabled={currentPage == Math.ceil(data?.length / itemsPerPage)}
          onClick={() =>
            router.push(
              `/movies/?page=${
                Number(currentPage) + 1
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

export default ColumnView;
