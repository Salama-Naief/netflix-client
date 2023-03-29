import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MdPlayArrow, MdInfoOutline } from "react-icons/md";
import { axiosUrl } from "../utils/axiosUrl";
function Featured({ type, genre, setGenre }) {
  const [randumMovie, setRandimMovie] = useState({});

  useEffect(() => {
    setGenre("");
  }, [type]);
  console.log("ramdun", randumMovie);
  useEffect(() => {
    axiosUrl
      .get(`/movies/getrandum`)
      .then((res) => {
        setRandimMovie(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [type]);

  const handleSellect = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div className="relative overflow-hidden w-full" style={{ height: "90vh" }}>
      <div className="absolute top-20 left-0 px-2 md:left-10 z-10 ">
        {type && (
          <div className="flex items-end">
            <div
              className="mr-4 font-medium text-white text-xl md:text-3xl rounded-md px-1"
              style={{
                background:
                  "linear-gradient(to left,transparent 0%,rgb(0,0,0,0.2) 50%)",
              }}
            >
              {type === "movie" ? "Movies" : "Series"}
            </div>
            <select
              value={genre}
              onChange={(e) => handleSellect(e)}
              name="genre"
              id="genre"
              className="bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1"
            >
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="westren">Westren</option>
              <option value="fantasy">Fantasy</option>
              <option value="romance">Romance</option>
              <option value="thriller">Thriller</option>
              <option value="animation">Animation</option>
              <option value="historical">Historical</option>
              <option value="decumantary">Decumentary</option>
            </select>
          </div>
        )}
      </div>
      <div className="w-full h-full">
        <img
          src={randumMovie && randumMovie[0]?.img}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="absolute z-10 bottom-20 md:left-10 left-0 w-full px-2">
        <div
          className=" w-fit"
          style={{
            background:
              "linear-gradient(to left,transparent 0%,rgb(0,0,0,0.2) 50%)",
          }}
        >
          <div
            className="text-8xl text-white font-semibold"
            style={{ fontStyle: "italic" }}
          >
            {randumMovie && randumMovie[0]?.title}
          </div>
        </div>
        <div
          className="md:w-1/3 w-fit leading-6 my-5 text-wrap text-sm text-white py-1 px-2 rounded-md grad"
          style={{
            background:
              "linear-gradient(to left,transparent 0%,rgb(0,0,0,0.2) 50%)",
          }}
        >
          {randumMovie && randumMovie[0]?.desc}
        </div>
        <div className="flex items-center">
          <Link
            to={{
              pathname: "/watch",
              vedio: randumMovie && randumMovie[0]?.vedio,
            }}
            className="py-1.5 rounded-md px-5 bg-gray-100 mr-3 font-medium flex items-center justify-center"
          >
            {" "}
            <MdPlayArrow className="mr-1" /> Play
          </Link>
          <Link
            to={{
              pathname: "/dashboard/moviedetails/1",
              movie: randumMovie && randumMovie[0],
            }}
            className="py-1.5 rounded-md bg-gray-500 text-white px-5 font-medium flex items-center justify-center"
          >
            <MdInfoOutline className="mr-1" /> Info
          </Link>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    randumMovie: state.movieState.randumMovie,
  };
};
export default connect(mapStateToProps)(Featured);
