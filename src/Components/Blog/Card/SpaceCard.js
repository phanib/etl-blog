import React from "react";
import { useHistory } from "react-router-dom";
import { CardContainer, CardTitle } from "./";

export const SpaceCard = ({ space }) => {
  const history = useHistory();

  const openBlog = () => {
    history.push(`/space/${space._id}`);
  };

  return (
    <CardContainer>
      <div onClick={() => openBlog(space.name, space.id)}>
        <CardTitle>{space.name}</CardTitle>
      </div>
    </CardContainer>
  );
};
