import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem" activeClassName="active">
          Home
        </Link>
        <Link
          to="/about"
          className="desktopMenuListItem"
          activeClassName="active"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="desktopMenuListItem"
          activeClassName="active"
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="desktopMenuListItem"
          activeClassName="active"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="desktopMenuListItem right-align"
          activeClassName="active"
          id="contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
