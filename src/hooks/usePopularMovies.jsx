import { options } from "../utils/contants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies,addPopularMovies } from "../utils/movieSlice"

const usePopularMovies=()=>{
const dispatch=useDispatch()
 
const getPopularMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=2', options)
  const json =await data.json();
  // console.log(json.results);
  dispatch(addPopularMovies(json.results));
}

useEffect(()=>{
  getPopularMovies();
},[])
}

export default usePopularMovies