import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

      {/* Mobile Menu */}
      <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
        &#9776;
      </div>

      <div className={`mobileMenu ${mobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className="mobileMenuListItem"
          activeClassName="active"
          onClick={toggleMobileMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="mobileMenuListItem"
          activeClassName="active"
          onClick={toggleMobileMenu}
        >
          About
        </Link>
        <Link
          to="/projects"
          className="mobileMenuListItem"
          activeClassName="active"
          onClick={toggleMobileMenu}
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="mobileMenuListItem"
          activeClassName="active"
          onClick={toggleMobileMenu}
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="mobileMenuListItem"
          activeClassName="active"
          id="contact"
          onClick={toggleMobileMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
