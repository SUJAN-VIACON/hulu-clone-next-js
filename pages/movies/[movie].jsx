import Image from "next/image";
import Header from "../../Component/Header";
import { PlayIcon } from "@heroicons/react/outline";
import Nav from "../../Component/Nav";
import RelatedMovie from "../../Component/RelatedMovie";
import api from "../../Services/api";

export default function Movies({ movie, genres, relatedMovies }) {
  const BASE_PATH = "https://www.themoviedb.org/t/p/original";

  if (!movie && !genres) {
    return <p>Movie not found</p>;
  }

  const imageURL =
    `${BASE_PATH}/${movie.poster_path || movie.backdrop_path}` ||
    `${BASE_PATH}/${movie.poster_path}`;

  return (
    <div>
      <Header />
      <Nav genres={genres} />

      <div className="relative mt-10">
        <div className="back-ground-image">
          <Image
            placeholder="blur"
            src={imageURL}
            blurDataURL={movie.blurImageUrl}
            layout="fill"
            objectFit="cover"
            className=" object-cover rounded-xl "
          />
        </div>

        <div className="inner-content linier-background xl:flex mx-20x px-16 py-5 absolute top-0 bottom-0 left-0 right-0">
          <Image
            placeholder="blur"
            src={imageURL}
            blurDataURL={movie.blurImageUrl}
            height={400}
            width={500}
            objectFit="cover"
            className=" object-cover rounded"
          />
          <div className="mx-10 inner-info">
            <h3 className=" xl:text-4xl text-2xl font-bold ">
              {movie.title || movie.original_name}
            </h3>
            <p className=" text-lg mt-2">
              {movie.media_type && `${movie.media_type} *`}{" "}
              {movie.release_date || movie.first_air_date} *{""} (IN) Action,
              Adventure, Science Fiction 2h 28m
            </p>
            <div className="flex my-5">
              <a href={movie.homepage}>
                <PlayIcon className="w-20  my-3 text-green-600" />
              </a>
              <p className=" flex items-center mx-3 font-bold">Play Now</p>
            </div>

            <h4 className="text-xl  font-bold">Overview</h4>
            <p className="mt-2">{movie.overview}</p>
          </div>
        </div>
      </div>
      <RelatedMovie relatedMovies={relatedMovies} />
    </div>
  );
}

export async function getStaticProps(context) {
  const movieId = context.params.movie;
  let movie = null;
  let genres = null;
  let relatedMovies = null;

  try {
    movie = await api.getMovie(movieId);
    genres = await api.getGenres();
    relatedMovies = await api.getRelatedMovie(movie.genres[0].id);
  } catch {}

  return {
    props: { movie, genres, relatedMovies },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  let movies = null;
  try {
    movies = await api.getPopularMovies();
  } catch {}

  if (!movies) return { paths: [], fallback: true };

  const paths = movies.map((movie) => ({
    params: { movie: movie.id.toString() },
  }));

  return { paths, fallback: true };
}
