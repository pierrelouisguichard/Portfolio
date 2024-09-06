import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Title>ABOUT ME</Title>
      <Text>
        Recent Computer Science graduate with hands-on professional experience
        in software development, including design, development, and testing.
        Confident in my ability to solve complex problems, work in a fast-paced
        environment and collaborate as part of a team. Enthusiastic to apply my
        skills in an entry-level software development role.
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
