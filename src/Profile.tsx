import React from "react";
import styled from "styled-components";

function Profile() {
  return (
    <Container>
      <NameAndJob>
        <Name>Pierre Guichard</Name>
        <Job>software engineer</Job>
      </NameAndJob>
      <ProfilePicture></ProfilePicture>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  padding: 20px;
  max-width: 1500px;
  width: 80%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const ProfilePicture = styled.div`
  padding: 50px;
  flex-grow: 1;
`;
