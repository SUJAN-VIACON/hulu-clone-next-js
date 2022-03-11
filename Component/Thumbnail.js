import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react/cjs/react.production.min";
import { useRouter } from "next/router";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_PATH = "https://www.themoviedb.org/t/p/original";
  const router = useRouter();
  const path = result.id;
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 "
      onClick={() => router.push(`/Movie/Action?${path}`)}
    >
      <Image
        layout="responsive"
        src={
          `${BASE_PATH}${result.poster_path || result.backdrop_path}` ||
          `${BASE_PATH}${result.poster_path}`
        }
        height={1080}
        width={1920}
        className=" rounded object-cover transition duration-200 ease-in transform sm:hover:scale-105"
      />

      <div>
        <p className=" truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} *`}{" "}
          {result.release_date || result.first_air_date} *{""}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
