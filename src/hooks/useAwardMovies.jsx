import { options } from "../utils/contants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addAwardMovies } from "../utils/movieSlice"

const useAwardMovies=()=>{
const dispatch=useDispatch()
 
const getAwardMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
  const json =await data.json();
  // console.log(json.results);
  dispatch(addAwardMovies(json.results));
}

useEffect(()=>{
  getAwardMovies();
},[])
}

export default useAwardMovies