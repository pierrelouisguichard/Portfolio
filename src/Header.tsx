import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleTheme }) {
  return (
    <Container>
      <Logo>Logo</Logo>
      <Menu>Menu</Menu>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Menu = styled.div``;

const GitHub = styled.div`
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const LinkedIn = styled.div`
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const LightSwitch = styled.div`
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Links = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
