import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react/cjs/react.production.min";
import Link from "next/link";
import Image from "next/image";

const Thumbnail = forwardRef(({ result: movie }, ref) => {
  const path = movie.id;

  return (
    <Link href={`/movies/${path}`}>
      <a className="group cursor-pointer p-2 ">
        <Image
          layout="responsive"
          src={movie.imageUrl}
          placeholder="blur"
          blurDataURL={movie.blurImageUrl}
          height={1080}
          width={1920}
          className="rounded object-cover transition duration-200 ease-in transform sm:hover:scale-105"
        />

        <div>
          <p className=" truncate max-w-md">{movie.overview}</p>
          <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
            {movie.title || movie.original_name}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {movie.media_type && `${movie.media_type} *`}{" "}
            {movie.release_date || movie.first_air_date} *{""}
            <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
          </p>
        </div>
      </a>
    </Link>
  );
});

export default Thumbnail;
