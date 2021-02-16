import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Loader } from "../Components/Common";
import { BlogContainer } from "../Components/Blog";
import { SpaceCard } from "../Components/Blog/Card/SpaceCard";
import { Button } from "../Components/Common/Button";

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const token = localStorage.getItem("blogToken");
  const id = window.location.href.split("/").pop();

  useEffect(() => {
    async function fetchData() {
      const result = await axios("/space");
      if (result) {
        setSpaces(result?.data);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const onLogin = async () => {
    history.push("/login");
  };

  const onSignup = async () => {
    history.push("/signup");
  };

  const handleCreate = () => {
    history.push("/space/create");
  };

  return (
    <>
      <BlogContainer>
        <h1>All Spaces</h1>
        {!spaces.length ? (
          <>
            <div>No spaces to explore.</div>
          </>
        ) : (
          spaces.map((v, i) => {
            return (
              <>
                <SpaceCard space={v} key={i} />
              </>
            );
          })
        )}
        {token ? (
          <Button onClick={handleCreate}>Create Space</Button>
        ) : (
          <>
            <div>You need an account to create a space</div>
            <Button onClick={onSignup}>Signup</Button>
            <Button onClick={onLogin}>Log in</Button>
          </>
        )}
      </BlogContainer>
    </>
  );
};

export default Spaces;
