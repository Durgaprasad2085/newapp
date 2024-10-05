import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UpComing() {
  const [movies, setMovies] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    const upcomingSearches = [
      "Venom: The Last Dance",
      "Devara: Part 1",
      "Pushpa 2: The Rule",
      "The Raja Saab",
      "2024",
      "new release",
      "The Raja Saab",
    ];

    Promise.all(
      upcomingSearches.map(
        (searchTerm) =>
          fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=73eb6157`)
            .then((res) => res.json())
            .then((json) => json.Search || []) 
      )
    )
      .then((results) => {
        const allMovies = results.flat();
        setMovies(allMovies);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Upcoming Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.Year} className="col-md-3 my-4 text-center">
            <div
              className="card"
              style={{ width: "18rem", border: "2px solid black" }}
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
                  className="btn btn-primary mx-4"
                  onClick={() => alert(`Downloading${movie.Title}`)}
                >
                  Download
                </button>
                <button
                  className="btn btn-warning"
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

export default UpComing;
