import { options } from "../utils/contants"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { addTrendingMovies } from "../utils/movieSlice"

const useTrendingMovies=()=>{
const dispatch=useDispatch()

const trendingMovies=useSelector(store=>store.movies.trendingMovies)
 
const getTrendingMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2', options)
  const json =await data.json();
  // console.log(json.results);
  dispatch(addTrendingMovies(json.results));
}

useEffect(()=>{
  !trendingMovies && getTrendingMovies();
},[])
}

export default useTrendingMovies