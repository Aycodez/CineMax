import { MdOutlinePlayCircleFilled } from "react-icons/md";
import Image from "next/image";

const StreamingMovieCard = ({ movie }) => {
  return (
    <div className="relative w-full h-[250px] flex-col flex lg:justify-end  my-3 hover:brightness-75 duration-300 ease-in-out">
      <div className="absolute -z-10 h-full w-full text-white">
        <Image
          src={movie?.image}
          width={250}
          height={250}
          className="w-full h-full px-2 object-center"
          alt="Image of movie?"
        />
      </div>
      <div className="pt-5 pb-2 px-5 flex flex-col">
        <p className="text-[red] text-sm font-semibold">
          {movie?.genre.join(",")}
        </p>
        <h1 className="text-xl text-white font-bold">{movie?.name}</h1>
        <div className="flex gap-px items-center pt-1">
          <MdOutlinePlayCircleFilled className="text-white" size={30} />
          <p className="text-white text-[0.75rem] font-semibold">
            Season 1-{movie?.year}
          </p>
        </div>
      </div>
    </div>
  );
};
export default StreamingMovieCard;
