import React from "react";
import Navbar from "./navbar";

function App() {
  return (
    <div style={container}>
      <Navbar />
    </div>
  );
}

const container = {
  backgroundColor: "black",
  top: 0,
  left: 0,
  position: "absolute",
  height: "100vh",
  width: "100vw",
  color: "white",
};

export default App;
