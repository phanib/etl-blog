import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

/**
 * INHERITED FROM https://github.com/saadpasta/react-blog-github
 *
 * MODIFICATIONS:
 * 1. Refactored auth module
 * 1. Added Login and Logout
 */

const ButtonContainer = styled.div`
  display: block
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Button = styled.button`
  -webkit-appearance: none;
  background: linear-gradient(
    180deg,
    rgb(136, 220, 109) 0%,
    rgb(92, 168, 65) 100%
  );
  color: #fff;
  margin: 10px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;

  :hover {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  }
`;

const Text = styled.span`
  color: #37474f;
  font-size: 18px;
`;

export const BlogLogin = ({ isAbsolute }) => {
  const history = useHistory();
  const isLoggedIn = localStorage.getItem("blogToken") || false;

  const onLogin = async () => {
    history.push("/login");
  };

  const onSignup = async () => {
    history.push("/signup");
  };

  const onCreateStory = async () => {
    history.push("/story/create");
  };

  const onLogout = async () => {
    localStorage.removeItem("blogToken");
    localStorage.removeItem("blogUser");
    history.push("/");
  };

  return (
    <ButtonContainer absolute={isAbsolute}>
      {!isLoggedIn ? (
        <>
          <Button onClick={onSignup}>Signup</Button>
          <Button onClick={onLogin}>Log in</Button>
        </>
      ) : (
        <Text>
          Logged in as {localStorage.getItem("blogUser")}{" "}
          <Button onClick={onLogout}>Log Out</Button>
          <Button onClick={onCreateStory}>Create Story</Button>
        </Text>
      )}
    </ButtonContainer>
  );
};
