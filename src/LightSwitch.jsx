import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Switch = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  padding: 1rem 1.4rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.25s linear;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }
`;

const LightSwitch = ({ toggleTheme }) => {
  return (
    <Switch onClick={toggleTheme}>
      <FontAwesomeIcon icon={faLightbulb} />
    </Switch>
  );
};

export default LightSwitch;
