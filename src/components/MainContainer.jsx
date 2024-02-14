import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)

    if(!movies) return //early return 

    const mainMovie=movies[6]

    const{original_title,overview,id}=mainMovie
    



  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} ></VideoTitle>
      <VideoBackground movieId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer
