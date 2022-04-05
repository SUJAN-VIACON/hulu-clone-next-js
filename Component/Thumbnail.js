import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react/cjs/react.production.min";
import { useRouter } from "next/router";
import Link from "next/link";
import BlurImage from "./BlurImage";

const Thumbnail = forwardRef(({ result: movie }, ref) => {
  const BASE_PATH = "https://www.themoviedb.org/t/p/original";
  const router = useRouter();
  const path = movie.id;
  const imageURL =
    `${BASE_PATH}${movie.poster_path || movie.backdrop_path}` ||
    `${BASE_PATH}${movie.poster_path}`;
  return (
    <Link href={`/movies/${path}`}>
      <a className="group cursor-pointer p-2 ">
        <BlurImage
          layout="responsive"
          src={imageURL}
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
