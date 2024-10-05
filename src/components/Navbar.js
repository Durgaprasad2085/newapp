import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onsearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    onsearch(input);
  };

  return (
    <header className="sticky-top">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">MoviesWebsite</div>

          <div className="search-item">
            <form onSubmit={handleInputSubmit}>
              <input
                type="text"
                placeholder="Search"
                value={input}
                onChange={handleInputChange}
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/popular" className="nav-links">
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/upcoming" className="nav-links">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
