import React, { useState, useEffect } from "react";
import flying from "../img/flying.mp4";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetMovie } from "../redux/actions/MoveAction";
import {
  MdOutlineThumbDown,
  MdOutlineThumbUp,
  MdPlayArrow,
  MdAdd,
} from "react-icons/md";
import { axiosUrl } from "../utils/axiosUrl";
function ListItems({ movieList, movieId, GetMovie }) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [movie, setMovie] = useState("");

  console.log(movie);
  useEffect(() => {
    axiosUrl
      .get(`/movies/getmovie/${movieId}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [movieId]);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className="relative h-32 bg-white cursor-pointer"
      style={{ width: "250px", margin: "0 5px 0 0" }}
    >
      <div className="w-full h-full overflow-hidden">
        <img src={movie?.imgSm} alt="" className="w-full h-full object-cover" />
      </div>
      {mouseEnter && (
        <div
          className={`${
            mouseEnter ? "block" : "hidden"
          } box absolute bottom-0 left-0 w-72  z-40 text-white bg-black`}
        >
          <div className="w-full h-1/4 rounded-b-md overflow-hidden">
            <Link to={{ pathname: "/watch", vedio: movie.vedio }}>
              <video
                src={movie?.trailer}
                autoPlay={mouseEnter}
                muted={mouseEnter}
                loop
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <div className="py-2 px-3">
            <div className="flex items-center text-white py-2 ">
              <Link
                to={{ pathname: "/watch", vedio: movie.vedio }}
                className="p-1 border-2 cursor-pointer mr-3 border-white rounded-full"
              >
                <MdPlayArrow />
              </Link>

              <span className="p-1 border-2 cursor-pointer mr-3 border-white rounded-full">
                {" "}
                <MdAdd />
              </span>
              <span className="p-1 border-2 cursor-pointer mr-3 border-white rounded-full">
                <MdOutlineThumbDown />
              </span>
              <span className="p-1 border-2 cursor-pointer mr-3 border-white rounded-full">
                <MdOutlineThumbUp />
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-400 py-2">
              <span className="mr-3">1 hour 14 mins</span>
              <span className="px-1 border border-gray-600 mr-3 rounded">
                +{movie?.limit}
              </span>
              <span>{movie?.year}</span>
            </div>
            <p lang="10" className="text-white text-sm">
              {movie?.desc}
            </p>
            <div className="mt-2">{movie?.genre}</div>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    movieList: state.movieState.movie,
  };
};
export default connect(mapStateToProps, { GetMovie })(ListItems);
