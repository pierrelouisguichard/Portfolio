import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import Contact from "./contact";
import "./app.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
