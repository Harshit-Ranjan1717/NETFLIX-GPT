import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);
  return (
    <div className="px-6 ">
        <h1 className="font-semibold text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              details={movie}
            ></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;


