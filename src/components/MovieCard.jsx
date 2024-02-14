
import { IMG_CDN_URL } from "../utils/contants";
import { Link } from "react-router-dom";


const MovieCard = ({ posterPath, details }) => {

  if(!posterPath) return null;
  
  return (
    <>
    <Link className="w-48 pr-4 transform transition duration-500 ease-in-out hover:scale-110 " to={`/watch/${details.id}`}>
      <img
        
        src={IMG_CDN_URL + posterPath}
        alt="Movie-Card"
      />
    </Link>

    </>
  );
};

export default MovieCard;



