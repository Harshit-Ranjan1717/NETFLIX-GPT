import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"



const Browse = () => {

  useNowPlayingMovies()


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
