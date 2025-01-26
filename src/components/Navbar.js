import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to handle link click and collapse navbar
  const handleNavLinkClick = () => {
    setIsNavbarOpen(false); // Collapse the navbar after the link is clicked
  };

  // Function to toggle navbar on small screens
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle the navbar open/close state
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleNavbar} // Toggle navbar open/close on click
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/business"
                  onClick={handleNavLinkClick}
                >
                  Business
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/entertainment"
                  onClick={handleNavLinkClick}
                >
                  Entertainment
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/general"
                  onClick={handleNavLinkClick}
                >
                  General
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/health"
                  onClick={handleNavLinkClick}
                >
                  Health
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/science"
                  onClick={handleNavLinkClick}
                >
                  Science
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/sports"
                  onClick={handleNavLinkClick}
                >
                  Sports
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/technology"
                  onClick={handleNavLinkClick}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
