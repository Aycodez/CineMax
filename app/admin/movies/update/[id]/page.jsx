'use client'
import { useGetSpecificMovieQuery, useUpdateMovieMutation } from "@/redux/api/movie";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Link from 'next/link'

const UpdateMovie = ({ params }) => {
  const router = useRouter();
  const [movieData, setMovieData] = useState({
    name: "",
    year: "",
    detail: "",
    cast: [],
    rating: 0,
    image: null,
    genre: [],
    ratings: "",
    backgroundImage: "",
    duration: '',
    youtubeLink: ''
  });

  const { data: initialMovieData, isLoading } = useGetSpecificMovieQuery(params.id);

  useEffect(() => {
    if (initialMovieData) {
      setMovieData(initialMovieData);
    }
  }, [initialMovieData]);

  const [updateMovie, { isLoading: isUpdatingMovie }] =
    useUpdateMovieMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleUpdateMovie = async () => {
    try {
      if (
        !movieData.name ||
        !movieData.year ||
        !movieData.detail ||
        !movieData.cast
      ) {
        toast.error("Please fill all required fields");
        return;
      }

      await updateMovie({
        id: params.id,
        updatedMovie: {
          ...movieData,
        },
      })

      router.push("/admin/movies");
      setMovieData({
        name: "",
        year: "",
        detail: "",
        cast: [],
        ratings: 0,
        image: null,
        genre: "",
      });

      toast.success("Movie Successfully Updated!!!");
    } catch (error) {
      console.error("Failed to update movie: ", error);
      toast.error(`Failed to update movie: ${error.message}`);
    }
  };



  return (
    isLoading ? (<div className='h-screen w-full flex flex-col justify-center items-center'>
      <Loader />
      <p>Loading Movie details....</p>
    </div>) :
      <div className='flex-1 p-5 mb-5'>
        <h1 className='head-title'>Update Movie</h1>
        <p className='mt-2 mb-5 font-semibold'>ADMIN PANEL</p>
        <div className='bg-gray-900/5 p-3 rounded flex flex-col items-center'>
          <form onSubmit={handleUpdateMovie} className='lg:flex gap-3 lg:gap-20 w-full' >
            <div className="mb-4 w-full lg:w-1/2">
              <div className="mb-4">
                <label htmlFor="username" className='block text-sm mb-2'>Title</label>
                <input type="text" value={movieData.name}
                  onChange={handleChange} name="name" id="name" className='w-full p-px text-black outline-none border border-gray-300 rounded' />
              </div>
              <div className="mb-4">
                <label htmlFor="year" className='block text-sm  mb-2'>Year</label>
                <input type="text" value={movieData.year}
                  onChange={handleChange} name="year" id="year" className='w-full text-black outline-none border border-gray-300 rounded' />
              </div>
              <div className="mb-4">
                <label htmlFor="detail" className='block text-sm  mb-2'>
                  Storyline
                  <textarea
                    name="detail"
                    onChange={handleChange}
                    className='w-full text-black outline-none 
                            p-2 border border-gray-300 mt-1 rounded' value={movieData.detail}
                  />
                </label>
              </div>

              <div className="mb-4">
                <label htmlFor="cast" className='block text-sm  mb-2'>Cast(Comma Separated)</label>
                <input type="text" value={movieData.cast}
                  onChange={handleChange} name="cast" id="cast" className='w-full text-black outline-none border border-gray-300 rounded' />
              </div>
              <div>

              </div>

            </div>
            <div className="mb-4 w-1/2">
              <div className="mb-4">
                <label htmlFor="username" className='block text-sm  mb-2'>Background Poster</label>
                <input type="text" value={movieData.backgroundImage}
                  onChange={handleChange} name="backgroundImage" className='w-full text-black outline-none  border border-gray-300 rounded' />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className='block text-sm  mb-2'>Main Poster Image</label>
                <input type="text" value={movieData.image}
                  onChange={handleChange} name="image" className='w-full text-black outline-none  border border-gray-300 rounded' />
              </div>
              <div className="mb-4">
                <label htmlFor="year" className='block text-sm  mb-2'>Movie Link</label>
                <input type="text" value={movieData.youtubeLink}
                  onChange={handleChange} name="youtubeLink" className='w-full text-black outline-none  border border-gray-300 rounded' />
              </div>


              <div className="mb-4">
                <label htmlFor="cast" className='block text-sm  mb-2'>Duration</label>
                <input type="text" value={movieData.duration}
                  onChange={handleChange} name="duration" className='w-full text-black outline-none border border-gray-300 rounded' />
              </div>
              <div className="mb-4">
                <label htmlFor="cast" className='block text-sm  mb-2'>Rating</label>
                <input type="text" value={movieData.ratings}
                  onChange={handleChange} name="ratings" className='w-full text-black outline-none border border-gray-300 rounded' />
              </div>

            </div>

          </form>


        </div>
        <button

          onClick={handleUpdateMovie}
          className="bg-teal-500 text-white mt-5 px-4 py-2 rounded"
          disabled={isUpdatingMovie}
        >
          {isUpdatingMovie ? "Updating..." : "Update Movie"}
        </button>

        <button


          className="bg-red-500 text-white px-4 mt-5 py-2 rounded ml-2"
          disabled={isUpdatingMovie}
        >
          <Link href={`/admin/movies/delete${params.id}`}>{isUpdatingMovie ? "Deleting..." : "Delete Movie"}</Link>
        </button>
      </div>
  );
};
export default UpdateMovie;

