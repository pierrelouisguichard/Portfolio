import React from "react";
import styled from "styled-components";
import pic from "./assets/profile.png";

function Profile() {
  return (
    <Container>
      <NameAndJob>
        <Name>Pierre Guichard</Name>
        <Job>software engineer</Job>
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
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 400;
`;

const Job = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`;

const NameAndJob = styled.div`
  padding-left: 50px;
  flex-grow: 1;
  border-left: 2px solid ${(props) => props.theme.secondary};
  position: relative;
  z-index: 1;
`;

const ProfilePicture = styled.img`
  position: absolute;
  bottom: 0;
  left: 60%;
  transform: translateX(-50%);
  height: 90%;
  width: auto;
  z-index: 0;
`;
