import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import "./app.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
