const API_KEY = "32617012bea77a3729ee98ea76ff44a2";

export default {
  fetchTranding: {
    title: "Trending",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=10749&language=en-US&page=1`,
  },
  fetchToprated: {
    title: "Top Rated",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=80&language=en-US&page=1`,
  },
  fetchActionMovies: {
    title: "Action Movies",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=28&language=en-US&page=1`,
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=35&language=en-US&page=1`,
  },
  fetchHorrorMovies: {
    title: "Horror Movies",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=27&language=en-US&page=1`,
  },
  fetchRomanceMovies: {
    title: "Romance Movies",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=10749&language=en-US&page=1`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=9648&language=en-US&page=1`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=878&language=en-US&page=1`,
  },
  fetchWestern: {
    title: "Western",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=37&language=en-US&page=1`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=16&language=en-US&page=1`,
  },
  fetchTV: {
    title: "TV Movies",
    url: `/movie/popular?api_key=32617012bea77a3729ee98ea76ff44a2&with_genres=10770&language=en-US&page=1`,
  },
};
