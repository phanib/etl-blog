import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Loader } from "../Components/Common";
import {
  PostContainer,
  PostTitle,
  PostDate,
  BackButton,
} from "../Components/Post";
import { AuthorDetails } from "../Components/Post/Author";

import CommentsSection from "./CommentsSection";

/**
 * INHERITED FROM https://github.com/saadpasta/react-blog-github
 *
 * MODIFICATIONS:
 * 1. Refactored the home page
 */

function BlogHome() {
  const id = window.location.href.split("/").pop();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`story/${id}`);

      if (result) {
        setPost(result?.data);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  const onBackClick = () => {
    // ifthe previous page does not exist in the history list. this method to load the previous (or next) URL in the history list.
    window.history.go();
    // The back() method loads the previous URL in the history list.
    window.history.back();
  };

  return (
    <>
      {post.title && (
        <PostContainer>
          <BackButton onClick={() => onBackClick()}>Back</BackButton>

          <PostTitle>{post.title}</PostTitle>
          <div>
            <AuthorDetails>
              <div>
                {/* <AuthorName>{post.author.login}</AuthorName> */}
                <PostDate>
                  {moment(post.updatedAt).format("DD MMM YYYY")} .
                </PostDate>
              </div>
            </AuthorDetails>
          </div>

          {post.body}

          <CommentsSection comments={post.comments} />
        </PostContainer>
      )}
    </>
  );
}

export default BlogHome;
