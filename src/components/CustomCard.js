import React from "react";

export const CustomCard = ({ movie, func, onDelete, itemId }) => {
  //   console.log(movie);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={movie?.Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie?.Title} </h5>
        <p className="card-text">{movie?.Plot?.slice(0, 250)}...</p>
        {!movie.mode && (
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning" onClick={() => func("happy")}>
              Happy
            </button>
            <button className="btn btn-info" onClick={() => func("action")}>
              Action
            </button>
          </div>
        )}

        <div className="d-grid mt-2">
          <button
            className="btn btn btn-danger"
            onClick={() => onDelete(itemId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
