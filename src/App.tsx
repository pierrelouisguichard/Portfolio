import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import Experience from "./Experience";
import Education from "./Education";
import Footer from "./Footer";
import Skills from "./Skills";
import About from "./About";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header toggleTheme={toggleTheme} />
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
