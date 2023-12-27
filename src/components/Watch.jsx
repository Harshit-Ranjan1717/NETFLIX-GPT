import { useParams, Link } from "react-router-dom";
import { options } from "../utils/contants";
import { useEffect, useState } from "react";

const Watch = () => {
  const { contentId } = useParams();
  const [trailer, setTrailer] = useState(null);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${contentId}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailerData = filterData.length ? filterData[0] : json.results[0];
    //.log(trailerData);
    setTrailer(trailerData);
    setMovie(json);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  //.log(trailer?.key);
  return (
    <>
      <div>
        <Link to="/browse">
          <button className="py-2 px-4 mx-[700px] my-2 rounded-md bg-purple-700 z-40 absolute  ">
            {" "}
            HOME
          </button>
        </Link>

        {trailer && (
          <iframe
            className="w-screen aspect-video"
            src={
              "https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )}
      </div>
      but
    </>
  );
};

export default Watch;
