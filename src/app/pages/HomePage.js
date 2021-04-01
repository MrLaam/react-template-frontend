import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { loadPosts } from "../actions/postsActions";

let HomePage = ({ posts, onLoadPosts }) => {
  console.log(posts);
  return (
    <Card>
      {/* <Card.Title>Hi</Card.Title>
      <Card.Body>Sup</Card.Body> */}
      <Button onClick={onLoadPosts}>Load Posts</Button>
    </Card>
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
