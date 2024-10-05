import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=73eb6157`)
      .then((res) => res.json())
      .then((json) => {
        if (json.Search) {
          setMovies(json.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [searchTerm]);

  return (
    <div className="container my-5 ">
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-md-3">
            <div
              className="card"
              style={{ width: "18rem", border: "8px solid black" }}
            >
              <img
                src={movie.Poster}
                className="card-img-top"
                alt={movie.Title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>

                <button
                  className="btn btn-success"
                  onClick={() => alert(`Downloading ${movie.Title}...`)}
                >
                  Download
                </button>
                <button
                  className="btn btn-warning mx-4"
                  onClick={() => navigate(`/movie/${movie.imdbID}`)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
