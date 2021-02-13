import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Components/Header";
import { Loader } from "../Components/Common";
import { BlogContainer } from "../Components/Blog";
import { Card } from "../Components/Blog/Card";

/**
 * INHERITED FROM https://github.com/saadpasta/react-blog-github
 *
 * MODIFICATIONS:
 * 1. Added Login and fetching Blog Post
 */

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("/space/phantastic");

      if (result) {
        setPosts(result?.data[0]?.stories);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <BlogContainer>
        {!posts.length ? (
          <Loader />
        ) : (
          posts.map((v, i) => {
            return <Card blog={v} key={i} />;
          })
        )}
      </BlogContainer>
    </>
  );
};

export default Blog;
