import React from "react";
import moment from "moment";

import { PostDate } from "../";
import { AuthorAvatar, AuthorDetails, AuthorName } from "../Author";
import { CommentContainer } from "./";

import { HyperLink, CodeBlock } from "../../Markdown/Overrides";

export const Comment = ({ comment }) => {
  return (
    <CommentContainer>
      <AuthorDetails>
        <div>
          <AuthorName>{comment.author.login}</AuthorName>
          <PostDate>{moment(comment.updatedAt).format("DD MMM YYYY")}</PostDate>
        </div>
      </AuthorDetails>

      {comment.body}
    </CommentContainer>
  );
};
