import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <FontAwesomeIcon icon={faCode} className="logo" />
      <div className="menu-items">
        <Link className="menu-link" to="home">
          Home
        </Link>
        <Link className="menu-link" to="about">
          About
        </Link>
        <Link className="menu-link" to="projects">
          Projects
        </Link>
        <button className="contact-button">Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
