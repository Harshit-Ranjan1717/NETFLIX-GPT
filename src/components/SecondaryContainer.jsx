import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)

  return movies.nowPlayingMovies && (
    <div className="-mt-48 relative z-50 px-20 ">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} ></MovieList>
      <MovieList title={"Trending"} movies={movies.trendingMovies} ></MovieList>
      <MovieList title={"Must Watch"} movies={movies.casualMovies} ></MovieList>
      <MovieList title={"Popular"} movies={movies.popularMovies} ></MovieList>
      <MovieList title={"Casual Viewing"} movies={movies.topMovies} ></MovieList>
      <MovieList title={"Award-Winning Films"} movies={movies.awardMovies} ></MovieList>





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
