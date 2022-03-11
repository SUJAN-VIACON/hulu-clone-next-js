import Image from "next/image";
import Hearder from "../../Component/Hearder";
import { PlayIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
export default function Movies({ movie }) {
  const result = movie[0];
  const BASE_PATH = "https://www.themoviedb.org/t/p/original";
  return (
    <div>
      <Hearder />
      {/* <Nav genres={genres} /> */}

      <div className="  relative">
        <Image
          src={
            `${BASE_PATH}${result.poster_path || result.backdrop_path}` ||
            `${BASE_PATH}${result.poster_path}`
          }
          height={800}
          width={3000}
          objectFit="cover"
          className=" object-cover rounded-xl sm:h-100"
        />
        <div className="linier-background flex sm:flex-row mx-20x px-16 py-5 absolute top-0 bottom-0 left-0 right-0">
          <Image
            src={
              `${BASE_PATH}${result.poster_path || result.backdrop_path}` ||
              `${BASE_PATH}${result.poster_path}`
            }
            height={400}
            width={500}
            objectFit="cover"
            className=" object-cover rounded"
          />
          <div className="mx-10">
            <h3 className=" text-4xl text-white font-bold">
              Spider-Man: No Way Home ({result.id})
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
            <p className="text-white">
              Peter Parker is unmasked and no longer able to separate his normal
              life from the high-stakes of being a super-hero. When he asks for
              help from Doctor Strange the stakes become even more dangerous,
              forcing him to discover what it truly means to be Spider-Man.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const movie = await getMovies(28);

  // const movie = movies.filter(
  //   (movie) => movie.id == parseInt(context.params.Movie)[0]
  // );

  return {
    props: { movie },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const movies = await getMovies(28);

  const paths = movies.map((movie) => ({
    params: { Movie: movie.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     pages: [
//       { params: { pathSegment }, query: { getParam } },
//     ],
//   }
// }

async function getGenres() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=32617012bea77a3729ee98ea76ff44a2"
  );
  const data = await res.json();

  return data?.genres ?? [];
}

async function getMovies(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=${id}&language=en-US&page=1`
  );
  const data = await res.json();

  return data?.results ?? [];
}
