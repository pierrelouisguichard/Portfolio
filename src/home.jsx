import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="welcome-message">
        <p>
          Hey! I'm <span className="name">Pierre</span>, a <br />a Software
          Engineer.
        </p>
      </div>
    </div>
  );
};

export default Home;
