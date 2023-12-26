import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return movies.nowPlayingMovies && (
    <div className="-mt-48 relative z-50 px-20 ">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} ></MovieList>
      <MovieList title={"Popular"} movies={movies.popularMovies} ></MovieList>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} ></MovieList>
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} ></MovieList>
      <MovieList title={"horror"} movies={movies.nowPlayingMovies} ></MovieList>





      {/* 
        MoviesList-Popular
          -MovieCards*n 
        MoviesList-Trending Now
        MoviesList-Now Playing
        MoviesList-Horror

      
      */}
    </div>
  )
}

export default SecondaryContainer
