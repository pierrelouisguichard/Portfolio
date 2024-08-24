import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 100%; /* This creates a responsive square */
  position: relative;
`;

const Square = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.third};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.secondary};
  font-size: 1.6rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }
`;

const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  padding-top: 30px;
`;

function Skill({ icon, name }) {
  return (
    <Wrapper>
      <Square>
        <IconWrapper>
          {icon}
          <Title>{name}</Title>
        </IconWrapper>
      </Square>
    </Wrapper>
  );
}

export default Skill;
