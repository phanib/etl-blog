import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Login as Post } from "../Components/Login";
import { useHistory } from "react-router-dom";
import { Loader } from "../Components/Common";
import { Button } from "../Components/Common/Button";

export default function CreateSpace() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("blogToken");
  const history = useHistory();

  const onSubmit = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/space/create", {
        slug: slug,
        name: name,
      });

      if (result) history.push("/");
    } catch (e) {
      history.push("/");
    }
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSlug = (event) => {
    setSlug(event.target.value);
  };

  if (!token) {
    history.push("/");
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Post>
      <h1>Create your new space</h1>
      <form onSubmit={onSubmit}>
        <label>
          <p>Space Name</p>
          <input type="text" value={name} onChange={handleName} />
        </label>
        <label>
          <p>Space Slug</p>
          <input type="text" value={slug} onChange={handleSlug} />
        </label>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Post>
  );
}
