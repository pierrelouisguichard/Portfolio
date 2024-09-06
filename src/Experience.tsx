import React from "react";
import styled from "styled-components";

function Experience() {
  return (
    <Container>
      <Title>Experience</Title>
      <Timeline>
        <TimelineItem>
          <Dot />
          <Content>
            <RoleTitle>Software Developer & IT Support</RoleTitle>
            <Company>CTO & Co</Company>
            <DateRange>Jun 2024 - Present</DateRange>
            <Description>
              • Developed and implemented scripts to automate internal processes
              for CTO & Co and clients, resulting in over a 20% increase in
              operational efficiency and a significant reduction in manual
              workload.
            </Description>
            <Description>
              • Collaborated closely with my team to resolve IT issues, ensuring
              99.9% uptime and maintaining the company’s IT infrastructure,
              including network setup, software installations, and security
              protocols.
            </Description>
            <Description>
              • Acquired a diverse set of skills by assuming over three
              additional roles and tasks beyond my core responsibilities,
              including project management, client relations, and operational
              duties.
            </Description>
            <Description>
              • Contributed to 5+ projects with direct impact on company
              success, consistently delivering measurable results and earning
              recognition for achievements.
            </Description>
          </Content>
        </TimelineItem>
        <TimelineItem>
          <Dot />
          <Content>
            <RoleTitle>Software Engineer Intern</RoleTitle>
            <Company>smartTrade Technologies</Company>
            <DateRange>Jun 2023 - Sep 2023</DateRange>
            <Description>
              • Collaborated for 11 weeks with the Professional Services Team on
              two projects: a trading internalisation algorithm and a Download
              Automation Script, gaining insights into the financial sector.
            </Description>
            <Description>
              • Acquired experience with the software development life cycle and
              agile methodology through planning, coding, and testing software.
              Demonstrated ability to learn new technologies quickly, completing
              projects rapidly and with high quality.
            </Description>
            <Description>
              • Implemented improvements to internal tools, significantly
              enhancing efficiency by reducing download times by over 60%,
              demonstrating adaptability and problem-solving skills.
            </Description>
            <Description>
              • Delivered the pair projects to an audience of 30+ professionals,
              effectively demonstrating strong planning and presentation skills
              that resonated with both technical and non-technical audiences.
            </Description>
          </Content>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

export default Experience;

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
