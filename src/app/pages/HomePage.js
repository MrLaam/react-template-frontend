import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { loadPosts } from "../actions/postsActions";

let HomePage = ({ posts, onLoadPosts }) => {
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
