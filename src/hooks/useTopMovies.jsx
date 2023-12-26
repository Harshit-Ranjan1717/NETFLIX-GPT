import { options } from "../utils/contants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopMovies } from "../utils/movieSlice"

const useTopMovies=()=>{
const dispatch=useDispatch()
 
const getTopMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=2', options)
  const json =await data.json();
  // console.log(json.results);
  dispatch(addTopMovies(json.results));
}

useEffect(()=>{
  getTopMovies();
},[])
}

export default useTopMovies