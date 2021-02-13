import React from "react";

import {
  Comment,
  CommentLink,
  CommentLinkContainer,
} from "../Components/Post/Comment";
/**
 * INHERITED FROM https://github.com/saadpasta/react-blog-github
 *
 * MODIFICATIONS:
 * 1. Refactored the comments model
 */

const CommentsSection = ({ comments }) => {
  return (
    <>
      <CommentLinkContainer>
        <CommentLink href={"#issue-comment-box"} target="_blank">
          Post a comment
        </CommentLink>
      </CommentLinkContainer>
      {comments.map((v, id) => (
        <Comment comment={v} key={id} />
      ))}
    </>
  );
};

export default CommentsSection;
