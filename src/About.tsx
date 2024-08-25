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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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
