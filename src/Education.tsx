import React from "react";
import styled from "styled-components";

function Education() {
  return (
    <Container>
      <Title>Education</Title>
      <Timeline>
        <TimelineItem>
          <Dot />
          <Content>
            <RoleTitle>
              Bachelor of Computer Science (First Class Honours)
            </RoleTitle>
            <Company>London South Bank University</Company>
            <DateRange>Sep 2021 – Jun 2024</DateRange>
            <Description>
              • Acquired the fundamentals in software engineering principles,
              including design patterns, version control, and full-stack
              development, by working on real-world projects and collaborating
              in team-based environments.
            </Description>
          </Content>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

export default Education;

const Container = styled.div`
  padding: 20px;
  max-width: 1800px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 50px;
`;

const Timeline = styled.div`
  position: relative;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;
  width: 100%; /* Ensures full width for the vertical line */

  &::after {
    content: "";
    position: absolute;
    left: 7px; /* Adjust to center the line with the dot */
    top: 55px; /* Aligns the vertical line with the middle of the dot */
    bottom: 35px; /* Extend the line beyond the content */
    width: 2px;
    background-color: white;
  }
`;

const Dot = styled.div`
  width: 25px;
  height: 25px;
  background-color: #ffb700;
  border-radius: 50%;
  position: absolute;
  left: -4px;
  top: 20px;
  box-shadow: 0 0 25px rgba(255, 183, 0, 0.7); /* Adjust the glow color and intensity */
`;

const Content = styled.div`
  /* background-color: white; */
  padding: 15px 20px;
  border-radius: 8px;
  margin-left: 30px;
  color: white;
  width: 100%;
`;

const RoleTitle = styled.h3`
  margin: 0;
  font-size: 28px;
`;

const Company = styled.p`
  margin: 5px 0;
  font-weight: bold;
  font-size: 18px;
  color: #c5c5c5;
`;

const DateRange = styled.p`
  margin: 0;
  font-size: 18px;
  color: gray;
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 18px;
  line-height: 1.5;
  list-style: disc; /* For adding bullet points */
  padding-left: 20px; /* Indent the text */
  text-indent: -20px; /* Align bullets properly */
`;
