import useAwardMovies from "../hooks/useAwardMovies"
import useCasualMovies from "../hooks/useCasualMovies"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopMovies from "../hooks/useTopMovies"
import useTrendingMovies from "../hooks/useTrendingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"



const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()
  useTopMovies()
  useCasualMovies()
  useAwardMovies()

  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>

      

      {/* 

      Main container
        -videoBackground
        -video title
      Secondary Container
        -MovieList*n
          -cards*n 

      */}

    </div>
  )
}

export default Browse
