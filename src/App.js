import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import MovieDetails from "./components/MovieDetails";
import PopularMovies from "./components/PapularMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [searchTerm, setsearchTerm] = useState("");
  const handlersearch = (Term) => {
    setsearchTerm(Term);
  };
  return (
    <div>
      <Router>
        <Navbar onsearch={handlersearch} />
        <Routes>
          <Route path="/" element={<Product searchTerm={searchTerm} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/upcoming" element={<UpcomingMovies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
