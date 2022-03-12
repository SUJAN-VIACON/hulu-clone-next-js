import Head from "next/head";
import Header from "../Component/Header";
import Nav from "../Component/Nav";
import Results from "../Component/Results";

export default function Home({ movies, genres }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg"
        />
      </Head>
      <Header />
      <Nav genres={genres} />
      <Results results={movies} />
    </div>
  );
}

export async function getStaticProps(context) {
  const genre = context.params.genre;
  const genres = await getGenres();
  const currentGenre = genres.filter((g) => g.name == genre)[0];
  const movies = await getMovies(currentGenre.id);
  return {
    props: { movies, genres },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const genres = await getGenres();

  const paths = genres.map((genre) => ({
    params: { genre: genre.name },
  }));

  return { paths, fallback: "blocking" };
}

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
