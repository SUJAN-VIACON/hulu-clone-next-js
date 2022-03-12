import Image from "next/image";
import Header from "../../Component/Header";
import { PlayIcon } from "@heroicons/react/outline";

export default function Movies({ movie }) {
  const BASE_PATH = "https://www.themoviedb.org/t/p/original";

  return (
    <div>
      <Header />
      {/* <Nav genres={genres} /> */}

      <div className="  relative">
        <Image
          src={
            `${BASE_PATH}/${movie.poster_path || movie.backdrop_path}` ||
            `${BASE_PATH}/${movie.poster_path}`
          }
          height={800}
          width={3000}
          objectFit="cover"
          className=" object-cover rounded-xl sm:h-100"
        />
        <div className="linier-background flex sm:flex-row mx-20x px-16 py-5 absolute top-0 bottom-0 left-0 right-0">
          <Image
            src={
              `${BASE_PATH}/${movie.poster_path || movie.backdrop_path}` ||
              `${BASE_PATH}/${movie.poster_path}`
            }
            height={400}
            width={500}
            objectFit="cover"
            className=" object-cover rounded"
          />
          <div className="mx-10">
            <h3 className=" text-4xl text-white font-bold">
              {movie.title || movie.original_name}
            </h3>
            <p className=" text-lg text-white">
              12/17/2021 (IN) Action, Adventure, Science Fiction 2h 28m
            </p>
            <div className="flex">
              <PlayIcon className="w-20 text-white my-3 text-green-600" />
              <p className="text-white flex items-center mx-3 font-bold">
                Play Now
              </p>
            </div>

            <h4 className="text-xl text-white font-bold">Overview</h4>
            <p className="text-white">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const movieId = context.params.movie;
  const movie = await getMovie(movieId);

  return {
    props: { movie },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const movies = await getPopularMovies();

  const paths = movies.map((movie) => ({
    params: { movie: movie.id.toString() },
  }));

  return { paths, fallback: true };
}

async function getGenres() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=32617012bea77a3729ee98ea76ff44a2"
  );
  const data = await res.json();

  return data?.genres ?? [];
}

async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2`
  );
  const data = await res.json();

  return data?.results ?? [];
}

async function getMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=32617012bea77a3729ee98ea76ff44a2`
  );
  const data = await res.json();

  return data;
}
