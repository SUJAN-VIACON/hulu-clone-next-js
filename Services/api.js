import { getPlaiceholder } from "plaiceholder";

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
  let movies = await generateBlurImage(data?.results ?? []);

  return movies;
}

async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2`
  );

  const data = await res.json();
  let movies = await generateBlurImage(data?.results ?? []);

  return movies;
}

async function getMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=32617012bea77a3729ee98ea76ff44a2`
  );

  const data = await res.json();
  let movies = await generateBlurImage([data] ?? []);

  return movies[0];
}

async function getRelatedMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=${id}&language=en-US&page=1`
  );

  const data = await res.json();
  let movies = await generateBlurImage(data?.results ?? []);

  return movies;
}

// * helper functions

async function generateBlurImage(movies) {
  const BASE_PATH = "https://www.themoviedb.org/t/p/original";
  return (movies = await Promise.all(
    movies.map(async (movie) => {
      movie.imageUrl =
        `${BASE_PATH}${movie.poster_path || movie.backdrop_path}` ||
        `${BASE_PATH}${movie.poster_path}`;
      movie.blurImageUrl = await getPlaiceholder(movie.imageUrl, { size: 10 });
      return movie;
    })
  ));
}

export default {
  getGenres,
  getMovies,
  getRelatedMovie,
  getMovie,
  getPopularMovies,
};
