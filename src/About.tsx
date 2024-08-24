import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Parallax
        translateX={["-400px", "-200px"]}
        startScroll={window.innerHeight / 2}
        endScroll={window.innerHeight}
      >
        <Title>ABOUT ME</Title>
      </Parallax>
    </Container>
  );
}

export default About;

const Container = styled.div`
  padding: 20px;
  max-width: 1500px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 10rem;
  color: ${(props) => props.theme.secondary};
  opacity: 10%;
`;
