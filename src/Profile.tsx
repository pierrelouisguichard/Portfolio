import React from "react";
import styled from "styled-components";
import pic from "./assets/profile.png";

function Profile() {
  return (
    <Container>
      <NameAndJob>
        <Name>Pierre Guichard</Name>
        <Job>Software Engineer</Job>
      </NameAndJob>
      <ProfilePicture src={pic} alt="Profile" />
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  position: relative;
  padding: 20px;
  max-width: 1800px;
  width: 80%;
  height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const NameAndJob = styled.div`
  padding-left: 50px;
  border-left: 2px solid ${(props) => props.theme.secondary};
  position: relative;
  z-index: 1;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 400;
`;

const Job = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`;

const ProfilePicture = styled.img`
  width: 600px;
  height: auto;
  border-radius: 5px;
`;
