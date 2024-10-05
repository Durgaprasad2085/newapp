import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=73eb6157`)
      .then((res) => res.json())
      .then((details) => setMovieDetails(details))
      .catch((err) => console.log("Error fetching movie details:", err));
    setloading(false);
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!movieDetails) return <div>No movie details found.</div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4">
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-8 ">
          <h2>{movieDetails.Title}</h2>
          <p>
            <strong>Year:</strong> {movieDetails.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movieDetails.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movieDetails.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movieDetails.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movieDetails.Plot}
          </p>
          <p>
            <strong>IMDB Rating:</strong> {movieDetails.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
