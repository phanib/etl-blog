import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Login } from "../Components/Login";
import { useHistory } from "react-router-dom";
import { Loader } from "../Components/Common";

const Button = styled.button`
  -webkit-appearance: none;
  background: linear-gradient(
    180deg,
    rgb(136, 220, 109) 0%,
    rgb(92, 168, 65) 100%
  );
  color: #fff;
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

export default function LoginContainer() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("blogToken");
  const history = useHistory();

  const onSubmit = async () => {
    setLoading(true);
    const result = await axios.post("/login", {
      email: username,
      password: password,
    });

    if (result) {
      localStorage.setItem("blogToken", result?.data?.token);
      localStorage.setItem("blogUser", result?.data?.email);
      setLoading(false);
    }
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  if (token) {
    history.push("/");
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Login>
      <h1>Please Log In</h1>
      <form onSubmit={onSubmit}>
        <label>
          <p>Email</p>
          <input type="text" value={username} onChange={handleUserName} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Login>
  );
}
