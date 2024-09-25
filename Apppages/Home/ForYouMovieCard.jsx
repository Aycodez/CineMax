import Image from "next/image";
import Link from 'next/link'
const ForYouMovieCard = ({ movie }) => {
  return (
    <Link href={`/watch/${movie?._id}`}>
      <div className="relative w-full h-[250px] my-1 hover:brightness-75 duration-300 ease-in-out">
        <div className="absolute w-full h-full text-white">
          <Image
            src={movie?.image}
            width={250}
            height={250}
            className="w-full h-full object-fill lg:object-cover"
            alt="Image of movie"
          />
        </div>
      </div>

      <article className="w-full">
        <span className="text-gray-500">
          {movie?.year}, {movie?.genre[0].slice(0, 15)}
        </span>
        <h1 className="text-[red] font-bold">{movie?.name}</h1>
      </article>
    </Link>
  );
};

export default ForYouMovieCard;
