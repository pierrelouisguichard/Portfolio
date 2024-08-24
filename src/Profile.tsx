import React from "react";
import styled from "styled-components";

function Profile() {
  return (
    <Container>
      <NameAndJob>
        <h1>Pierre Guichard</h1>
        <h2>software engineer</h2>
      </NameAndJob>
      <ProfilePicture></ProfilePicture>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  background-color: green;
  padding: 20px;
  max-width: 1500px;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameAndJob = styled.div`
  background-color: #cda9cd;
  padding: 50px;
  flex-grow: 1;
`;

const ProfilePicture = styled.div`
  background-color: #4b4b87;
  padding: 50px;
  flex-grow: 1;
`;
