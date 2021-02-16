import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Login as Post } from "../Components/Login";
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

export default function CreateStory() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("blogToken");
  const history = useHistory();
  const id = window.location.href.split("/").pop();

  const onSubmit = async () => {
    setLoading(true);
    const result = await axios.post("/story/create", {
      title: title,
      body: body,
      slug: id,
    });

    if (result) {
      history.push(`/space/${id}`);
    }
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  if (!token) {
    history.push("/");
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Post>
      <h1>Write your new story</h1>
      <form onSubmit={onSubmit}>
        <label>
          <p>Title</p>
          <input type="text" value={title} onChange={handleTitle} />
        </label>
        <label>
          <p>Body</p>
          <textarea
            rows="10"
            columns="10"
            type="textarea"
            value={body}
            onChange={handleBody}
          />
        </label>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Post>
  );
}
