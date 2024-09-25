"use client";
import {
  useGetSpecificMovieQuery,
  useDeleteMovieMutation,
} from "@/redux/api/movie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MdOutlineDeleteSweep } from "react-icons/md";

const DeleteMovie = ({ params }) => {
  const router = useRouter();
  const { data: movie, isLoading } = useGetSpecificMovieQuery(params.id);
  const [deleteMovie] = useDeleteMovieMutation();

  const handleDeleteMovie = async () => {
    try {
      toast.success("Movie deleted successfully");
      await deleteMovie(params.id);
      router.push("/admin/movies");
    } catch (error) {
      console.error("Failed to delete movie:", error);
      toast.error(`Failed to delete movie: ${error?.message}`);
    }
  };

  return (
    <div className="flex-1 p-5 mb-5">
      <h1 className="lg:head-title text-xl">
        Delete <span className="text-red-500">{movie?.name}</span>
      </h1>
      <p className="mt-2 mb-5 font-semibold">ADMIN PANEL</p>
      <div className="absolute lg:w-auto px-3 w-full right-1/2 translate-x-1/2 flex items-center justify-center">
        <div className="w-full lg:w-auto shadow-2xl rounded-lg flex flex-col gap-2 items-center ring-inset py-3 px-5">
          <MdOutlineDeleteSweep className="text-[red]" size={80} />
          <h1 className="head-title">Are you sure?</h1>
          <p className="text-sm text-center text-gray-500 lg:w-[70%]">
            If you delete this movie, It will be permanently deleted from the
            database.
          </p>
          <div className="fc mt-4">
            <button
              onClick={handleDeleteMovie}
              disabled={isLoading}
              className="rounded-2xl bg-[red] text-white py-2 px-4"
            >
              Delete
            </button>
            <button
              onClick={() => router.push("/admin/movies")}
              disabled={isLoading}
              className="rounded-2xl bg-gray-900/5 py-2 px-4"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteMovie;
