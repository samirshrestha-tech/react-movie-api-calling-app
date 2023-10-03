import React, { useEffect, useRef, useState } from "react";
import { CustomCard } from "./CustomCard";
import { fetchMovie } from "../utilities/axiosHelper";
import randomGenerator from "../utilities/randomstr";

export const SearchForm = ({ addToMovieList }) => {
  const [movie, setMovie] = useState({});
  // console.log(movie.imdbID);
  const strRef = useRef("");
  const [error, setError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setMovie({});
    setError("");
    // geting the input field data in a unontrolled method using useRef()
    const str = strRef.current.value;
    const data = await fetchMovie(str);
    console.log(data);

    if (data.Response === "True") {
      setMovie(data);
    } else {
      setError(data.Error);
    }
  };

  const handleOnDelete = () => {
    setMovie({});
  };
  // console.log(movie);
  // uplifiting the function
  const func = (mode) => {
    addToMovieList({ ...movie, mode });
    // to set the movie to initial state
    setMovie({});
    strRef.current.value = "";
  };

  useEffect(() => {
    const randChar = randomGenerator();

    (async () => {
      const randMovie = await fetchMovie(randChar);
      setMovie(randMovie);
    })();
    // fun();)
    // const fun = async () => {
    //   const randMovie = await fetchMovie(randChar);
    //   setMovie(randMovie);
    // };
    // fun();
  }, []);

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row gap-2">
        <div className="col-md">
          <form onSubmit={handleOnSubmit}>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search your movies"
                ref={strRef}
              />
            </div>
            <button type="submit" class="btn btn-warning">
              Search
            </button>
          </form>
          <hr />
        </div>
        <div className="col-md d-flex justify-content-center">
          {error && <div className="alert alert-danger">{error}</div>}
          {movie?.imdbID && (
            <CustomCard movie={movie} func={func} deleteFun={handleOnDelete} />
          )}
        </div>
      </div>
    </div>
  );
};
