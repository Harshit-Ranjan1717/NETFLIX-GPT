import { IMG_CDN_URL } from "../utils/contants"


const MovieCard = ({posterPath}) => {
  return (
    <>
      <img className="w-48 pr-4" src={IMG_CDN_URL+posterPath} alt="Movie-Card" />
    </>
  )
}

export default MovieCard
