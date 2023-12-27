import { options } from "../utils/contants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopMovies } from "../utils/movieSlice";

const useTopMovies = () => {
  const dispatch = useDispatch();

  const topMovies = useSelector((store) => store.movies.topMovies);

  const getTopMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=2",
      options
    );
    const json = await data.json();
    // //.log(json.results);
    dispatch(addTopMovies(json.results));
  };

  useEffect(() => {
    !topMovies && getTopMovies();
  }, []);
};

export default useTopMovies;
