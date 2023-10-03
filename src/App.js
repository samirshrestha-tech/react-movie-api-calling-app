import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  // const [id, setId] = useState("");
  const addToMovieList = (movie) => {
    const filArr = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...filArr, movie]);
  };
  console.log(movieList);
  // to update tomorrow on searchform instead of app.js as the data is in the search form
  // const handleOnDelete = (id) => {
  //   // const imdbId =
  //   if (window.confirm(`are you sure want to delete?`)) {
  //     const filteredArr = movieList.filter((item) => item.imdbId !== id);
  //     // setMovieList([]);
  //     console.log(movieList);

  //     setMovieList(filteredArr);
  //     console.log(filteredArr);
  //   }
  // };
  const handleOnDelete = (imdbID) => {
    // const imdbId =
    if (window.confirm(`are you sure want to delete?`)) {
      const filteredArr = movieList.filter((movie) => movie.imdbID !== imdbID);
      // setMovieList([]);
      // console.log(movieList);

      setMovieList(filteredArr);
      // console.log(filteredArr);
    }
  };

  return (
    <div className="wrapper bg-dark text-warning min-vh-100">
      <div className="container">
        {/* title */}

        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center">My Movie Collections</h1>
          </div>
        </div>

        <hr />

        {/* search area  */}
        <SearchForm addToMovieList={addToMovieList} />

        {/* =>form */}

        {/* =>card */}

        {/* movie list section */}
        {/* =>buttons */}
        {/* =>cards */}
        <Display movieList={movieList} handleOnDelete={handleOnDelete} />
      </div>
    </div>
  );
}

export default App;
