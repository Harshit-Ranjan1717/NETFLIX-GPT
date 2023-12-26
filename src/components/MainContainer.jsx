import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)

    if(!movies) return //early return 

    const mainMovie=movies[1]

    const{original_title,overview,id}=mainMovie
    



  return (
    <div>
      <VideoTitle title={original_title} overview={overview} ></VideoTitle>
      <VideoBackground movieId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer
