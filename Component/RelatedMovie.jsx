import Thumbnail from "./Thumbnail";

const RelatedMovie = (relatedMovies) => {
  console.log(relatedMovies);
  if (!relatedMovies) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center overflow-x-scroll scrollbar-hide">
      {relatedMovies.relatedMovies.map((result) => {
        return <Thumbnail key={result.id} result={result} />;
      })}
    </div>
  );
};

export default RelatedMovie;
