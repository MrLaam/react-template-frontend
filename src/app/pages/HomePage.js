import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { loadPosts } from "../actions/postsActions";
import { getJwt } from "../services/authService";

let HomePage = ({ posts, onLoadPosts }) => {
  const history = useHistory();

  useEffect(() => {
    const getAuthInfo = async () => {
      const thisAuthJwt = await getJwt();

      if (!thisAuthJwt) history.push("/login");
    };
    getAuthInfo();
  }, []);

  return (
    <div>
      <Button onClick={onLoadPosts}>Load Posts</Button>
      {posts.map((post, index) => (
        <Card
          key={index}
          style={{
            width: "25%",
            margin: "16px auto",
            padding: "32px 0 32px",
          }}
        >
          <Card.Title>{post.title}</Card.Title>
          <Card.Body>{post.description}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = {
  onLoadPosts: loadPosts,
};

HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePage;
