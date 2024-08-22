import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import LightSwitch from "./LightSwitch";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <Logo>Logo</Logo>
          <Menu>Menu</Menu>
          <Links>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSquareGithub} />
          </Links>
        </Header>
        <Container>
          <NameAndJob>
            <h1>Pierre Guichard</h1>
            <h2>software engineer</h2>
          </NameAndJob>
          <ProfilePicture></ProfilePicture>
          {/* <LightSwitch toggleTheme={toggleTheme} /> */}
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: red;
  height: 10vh;
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Menu = styled.div``;

const Links = styled.div``;

const Container = styled.div`
  background-color: green;
  padding: 20px;
  max-width: 1500px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameAndJob = styled.div`
  background-color: #cda9cd;
  padding: 50px;
  flex-grow: 1;
`;

const ProfilePicture = styled.div`
  background-color: #4b4b87;
  padding: 50px;
  flex-grow: 1;
`;
