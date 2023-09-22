import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav style={container}>
      <FontAwesomeIcon icon={faCode} style={logoStyle} />
      <div>
        <Link style={menu}>Home</Link>
        <Link style={menu}>About</Link>
        <Link style={menu}>Projects</Link>
        <button style={button}>
          Contact Me
          <FontAwesomeIcon icon={faMessage} />
        </button>
      </div>
    </nav>
  );
};

const container = {
  height: "5rem",
  width: "100vw",
  maxWidth: "80rem",
  margin: "0 auto",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  zIndex: 999,
};

const menu = {
  margin: "1rem",
  cursor: "pointer",
};

const button = {
  margin: "1rem",
  backgroundColor: "#ffffff",
  border: "1px solid #cccccc",
  borderRadius: "20px",
  color: "#000000",
  fontSize: "16px",
  padding: "8px 16px",
  cursor: "pointer",
  outline: "none",
};

const logoStyle = {
  color: "orange",
  fontSize: 100,
};

export default Navbar;
