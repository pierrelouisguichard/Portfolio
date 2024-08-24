import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { faLightbulb, faRobot } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleTheme }) {
  return (
    <Container>
      <Logo>
        <FontAwesomeIcon icon={faRobot} />
      </Logo>
      <Menu>Home AboutMe Projects Skills Experience Education</Menu>
      <Links>
        <LightSwitch onClick={toggleTheme}>
          <FontAwesomeIcon icon={faLightbulb} />
        </LightSwitch>
        <LinkedIn>
          <FontAwesomeIcon icon={faLinkedin} />
        </LinkedIn>
        <GitHub>
          <FontAwesomeIcon icon={faSquareGithub} />
        </GitHub>
      </Links>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 10vh;
  max-width: 1500px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 3rem;
`;

const Menu = styled.div``;

const GitHub = styled.div`
  opacity: 50%;
  transition: 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 100%;
  }
`;

const LinkedIn = styled.div`
  opacity: 50%;
  transition: 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 100%;
  }
`;

const LightSwitch = styled.div`
  opacity: 50%;
  transition: 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 100%;
  }
`;

const Links = styled.div`
  font-size: 3rem;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
