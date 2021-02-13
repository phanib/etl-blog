import React from "react";
import moment from "moment";
import { PostDate } from "../";
import { AuthorDetails, AuthorName } from "../Author";
import { CommentContainer } from "./";

/**
 * INHERITED FROM https://github.com/saadpasta/react-blog-github
 *
 * MODIFICATIONS:
 * 1. Updated to reflect comments model on backend
 */
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
