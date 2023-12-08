import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">
          Home
        </Link>
        <Link to="/about" className="desktopMenuListItem">
          About
        </Link>
        <Link to="/projects" className="desktopMenuListItem">
          Projects
        </Link>
        <Link to="/resume" className="desktopMenuListItem">
          Resume
        </Link>
        <Link to="/blog" className="desktopMenuListItem">
          Blog
        </Link>
        <Link to="/contact" className="desktopMenuListItem">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
