import { options } from "../utils/contants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addCasualMovies } from "../utils/movieSlice"

const useCasualMovies=()=>{
const dispatch=useDispatch()
 
const getCasualMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=5', options)
  const json =await data.json();
  // console.log(json.results);
  dispatch(addCasualMovies(json.results));
}

useEffect(()=>{
  getCasualMovies();
},[])
}

export default useCasualMovies