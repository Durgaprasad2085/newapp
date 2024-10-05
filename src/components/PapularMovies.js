import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    const movieSearches = [
      "The Lord of the Rings",
      "Avengers",
      "Inception",
      "Harry Potter",
      "Avatar",
      "The Dark Knight",
    ];

    Promise.all(
      movieSearches.map((searchTerm) =>
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=73eb6157`)
          .then((res) => res.json())
          .then((json) => json.Search || [])
          .catch((err) => {
            console.error("Error fetching popular movies:", err);
            return [];
          })
      )
    )
      .then((results) => {
        const allMovies = results.flat();
        setMovies(allMovies);
      })
      .catch((err) => {
        console.error("Error combining movie results:", err);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Popular Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-md-3 mb-4">
            <div
              className="card "
              style={{ width: "18rem", border: "8px solid black" }}
            >
              <img
                src={movie.Poster}
                className="card-img-top"
                alt={movie.Title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Release Year: {movie.Year}</p>
                <button
                  className="btn btn-success"
                  onClick={() => alert(`Downloading${movie.Title}`)}
                >
                  Download
                </button>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => Navigate(`/movie/${movie.imdbID}`)}
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

export default PopularMovies;
