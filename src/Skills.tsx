// Skills.js
import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import {
  Java,
  Spring,
  Javascript,
  Git,
  Firebase,
  Typescript,
  Mongo,
  Flutter,
  ReactIcon,
  Node,
  Python,
  C,
} from "./icons";
import { Parallax } from "react-scroll-parallax";

function Skills() {
  return (
    <>
      <ParallaxContainer>
        <Parallax
          translateX={["-200px", "100px"]}
          startScroll={2500}
          endScroll={3000}
        >
          <Title>SKILLS</Title>
        </Parallax>
      </ParallaxContainer>

      <Container>
        <Skill icon={<Java />} name={"Java"} />
        <Skill icon={<Spring />} name={"Spring"} />
        <Skill icon={<Javascript />} name={"Javascript"} />
        <Skill icon={<Typescript />} name={"Typescript"} />
        <Skill icon={<ReactIcon />} name={"React"} />
        <Skill icon={<Node />} name={"Node"} />
        <Skill icon={<Mongo />} name={"Mongo"} />
        <Skill icon={<Python />} name={"Python"} />
        <Skill icon={<C />} name={"C"} />
        <Skill icon={<Flutter />} name={"Flutter"} />
        <Skill icon={<Firebase />} name={"Firebase"} />
        <Skill icon={<Git />} name={"Git"} />
      </Container>
    </>
  );
}

export default Skills;

const Container = styled.div`
  padding: 100px;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 300px;
  max-width: 1800px;
  width: 80%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 40px;
  justify-content: center;
`;

const ParallaxContainer = styled.div`
  max-width: 1800px;
  width: 80%;
`;

const Title = styled.div`
  padding-top: 200px;
  font-weight: bold;
  font-size: 10rem;
  color: ${(props) => props.theme.secondary};
  opacity: 10%;
`;
