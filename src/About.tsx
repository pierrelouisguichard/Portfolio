import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Parallax
        translateX={["-500px", "-150px"]}
        startScroll={0}
        endScroll={1000}
      >
        <Title>ABOUT ME</Title>
      </Parallax>
      <Text>
        Experienced Junior Software Engineer proficient in software development,
        testing, and debugging with practical hands-on experience. Recently
        graduated in Computer Science with a passion for making real-world
        impacts. Excited about learning new technologies, collaborating in
        fast-paced environments, and committed to continuous learning and
        development.
      </Text>
    </Container>
  );
}

export default About;

const Container = styled.div`
  padding: 20px;
  max-width: 1800px;
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  /* background-color: green; */
  padding-top: 200px;
  font-weight: bold;
  font-size: 10rem;
  color: ${(props) => props.theme.secondary};
  opacity: 10%;
`;

const Text = styled.p`
  /* background-color: blue; */
  font-size: 1.5rem;
  padding: 10px 200px 200px 200px;
`;
