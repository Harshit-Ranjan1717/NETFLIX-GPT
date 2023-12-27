import { options } from "../utils/contants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCasualMovies } from "../utils/movieSlice";

const useCasualMovies = () => {
  const dispatch = useDispatch();
  const casualMovies = useSelector((store) => store.movies.casualMovies);

  const getCasualMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=5",
      options
    );
    const json = await data.json();
    // //.log(json.results);
    dispatch(addCasualMovies(json.results));
  };

  useEffect(() => {
    !casualMovies && getCasualMovies();
  }, []);
};

export default useCasualMovies;
