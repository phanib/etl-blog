import React from "react";
import { useHistory } from "react-router-dom";

import { CardContainer, CardTitle, CardDescription } from "./";

export const Card = ({ blog }) => {
  const history = useHistory();

  const nameToSlug = blog.title?.split(" ").join("-");

  const openBlog = () => {
    history.push(`/story/${nameToSlug}/${blog._id}`);
  };

  return (
    <CardContainer>
      <div onClick={() => openBlog(blog.title, blog.number)}>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>{blog.body}</CardDescription>
      </div>
    </CardContainer>
  );
};
