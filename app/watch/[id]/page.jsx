"use client";
import Link from "next/link";
import {
  useGetSpecificMovieQuery,
  useGetTopMoviesQuery,
  useAddMovieReviewMutation,
} from "@/redux/api/movie";

import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

const MoviePage = ({ params }) => {
  const { data: session } = useSession();
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState("");
  const { data: movie, refetch } = useGetSpecificMovieQuery(params.id);
  const { data: recommendedMovies } = useGetTopMoviesQuery();

  const [createReview, { isLoading: loadingMovieReview }] =
    useAddMovieReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        id: params.id,
        user: session?.user,
        rating,
        comment,
      }).unwrap();

      refetch();

      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error.data || error.message);
    }
  };

  return (
    <>
      <header className="pt-10 relative">
        <div className="sm:h-[10rem] lg:h-[30rem] w-full">
          <img
            src={movie?.backgroundImage}
            className="w-full h-full object-cover"
            alt="movie poster image"
          />
        </div>
      </header>
      <main className="bg-[rgb(11,14,23)] overflow-hidden flex text-white px-5">
        <div className="lg:max-w-[1200px] lg:px-5 flex lg:flex-row flex-col w-full mx-auto">
          <div className="lg:w-[20%] z-[999]">
            <div className="lg:w-[200px] lg:h-[300px] ml-10 lg:ml-0 size-[300px]">
              <Image
                src={movie?.image}
                className="size-full object-contain"
                alt="movie poster image"
                height={200}
                width={200}
              />
            </div>
          </div>

          <div className="lg:w-[80%] pt-4">
            <div className="lg:flex mb-5">
              <div className="lg:text-nowrap lg:text-left text-center">
                <h1 className="text-xl lg:text-5xl font-semibold">
                  {movie?.name}
                </h1>
                <div className="flex justify-center lg:justify-normal items-center gap-2 lg:gap-5 mt-3">
                  <div className="flex gap-2 items-center">
                    <FaStar className="text-yellow-500" size={25} />
                    <span className="lg:text-xl text-red-600 font-semibold">
                      {movie?.ratings}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegHeart size={20} />
                    <h2 className="text-sm">+Playlist</h2>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-normal my-3 gap-4">
                  <p className="">{movie?.year}</p>
                  <p>{movie?.duration}</p>
                  <p>{movie?.genre}</p>
                </div>
                <p className="lg:w-[70%] lg:text-left text-center text-pretty">
                  {movie?.detail}
                </p>
              </div>

              <div className="text-sm flex gap-3 flex-col mt-5">
                <Link
                  className="px-5 text-center hover:bg-transparent transition-all duration-300 ease-linear hover:border-[1px] py-3 bg-red-600"
                  href="/"
                >
                  WATCH NOW
                </Link>
                <Link
                  className="text-center px-5 lg:px-10 py-3 hover:bg-transparent transition-all duration-300 ease-linear hover:border-[1px] bg-red-600"
                  href="/"
                >
                  DOWNLOAD
                </Link>
                <Link
                  className="px-5 hover:bg-red-600 text-center py-3 transition-all duration-300 ease-linear bg-transparent border-[1px]"
                  href="/"
                >
                  +PLAY TRAILER
                </Link>
                {/* <button className='py-3 px-10 bg-sky-500'><Link href='/' className='p-2' >WATCH TRAILER</Link></button> */}
              </div>
            </div>
            <div className="px-2">
              <iframe
                // width="560"
                // height="315"
                className="w-full lg:w-[600px] h-[315px]"
                src={movie?.youtubeLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <hr className="border-t border-gray-800 h-0.5 w-full my-1" />

            <div>
              <h1 className="text-2xl font-semibold my-3">Movies Like This</h1>
              <div className="grid gap-3 grid-cols-3 lg:grid-cols-5 w-full lg:w-5/6 ">
                {recommendedMovies?.slice(0, 5).map((movie, i) => (
                  <Link href={`/watch/${movie._id}`} key={i} className="relative">
                    <div className="">
                      <Image
                        src={movie.image}
                        className="w-full h-[200px] object-center"
                        alt="movie poster image"
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="absolute gap-1 top-[75px] flex flex-col items-center">
                      <h1 className="text-lg">
                        {movie.name.length > 10
                          ? movie.name.slice(0, 9) + "..."
                          : movie.name}
                      </h1>
                      <p className="text-sm text-center">
                        {movie.detail.slice(0, 30)}
                      </p>
                      <button className="px-3 py-[4px] text-sm  bg-transparent border-2">
                        WATCH NOW
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <h1 className="text-2xl font-semibold my-3">Reviews</h1>

            <section className="mt-[3rem]">
              <div>{movie?.reviews.length === 0 && <p>No Reviews</p>}</div>
              {movie?.reviews.map((review) => (
                <div
                  key={review._id}
                  className="bg-[#1A1A1A] p-4 rounded-lg lg:w-1/2 mt-5"
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <IoPersonSharp size={30} />
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                      <p>
                        <span className="text-[#B0B0B0]">{review.name}</span>{" "}
                        &nbsp;
                        {review.createdAt.substring(0, 10)}
                      </p>
                      <div className="flex gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <p className="my-3 text-sm font-light">{review.comment}</p>
                </div>
              ))}
            </section>

            <div className="mt-12">
              <hr className="border-t border-gray-800 h-0.5 w-full my-1" />

              <h2 className="flex z-50 -mt-5 font-bold">Add a review</h2>
              {session ? (
                <>
                  <div className="w-72 flex flex-col text-sm mt-3">
                    <p>Write your Review</p>
                    <textarea
                      name="review"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Enter your review..."
                      className="my-1 font-light p-1 text-black outline-none"
                      id=""
                    ></textarea>
                  </div>
                  <button
                    onClick={submitHandler}
                    className="bg-green-600 p-2 mb-5 text-sm rounded-md"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <p className="my-3 text-sm">
                  You must be
                  <Link href="/login" className="text-red-600">
                    {" "}
                    logged in{" "}
                  </Link>{" "}
                  to post a review
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MoviePage;
