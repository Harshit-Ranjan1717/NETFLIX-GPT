import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import MovieList from "./MovieList";
const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return <Shimmer></Shimmer>;

  return (
    <div className="p-4  m-4 bg-black bg-opacity-80 ">
      <div>
        {movieNames.map((movieName,index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;

//funny indian retro movies
