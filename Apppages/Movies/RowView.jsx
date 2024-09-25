import Image from "next/image";
import Link from "next/link";

const RowView = ({ data }) => {
  return (
    <div className="movies-container grid grid-cols-3 lg:grid-cols-5 gap-2">
      {data?.map((movie, index) => (
        <Link key={index}
          href={`/watch/${movie._id}`}
          className="flex flex-col w-full h-[300px]"
        >
          <div className="w-full h-[250px] px-1">
            <Image
              src={movie.image}
              height={200}
              width={200}
              className="size-full object-cover"
              alt="Movie name"
            />
          </div>
          <p className="text-gray-600">{movie.year}</p>
          <p>
            {
              /* {movie.genre.length > 1
              ? movie.genre.join(", ").slice(0, 15) + "..."
              : movie.genre.join(", ")} */
              movie.genre[0]
            }
          </p>
          <h1 className="font-semibold">
            {movie.name.length > 15
              ? movie.name.slice(0, 12) + ".."
              : movie.name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default RowView;
