import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Comments from "./Comments";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function PostView({ posts, removePost, addComment, removeComment }) {
  const history = useHistory();
  const id = useParams().id;
  const post = posts.filter((p) => p.id === id)[0];

  const handleRemove = () => {
    removePost(post.id);
    history.push("/");
  };

  const handleEdit = () => {
    history.push(`/${post.id}/edit`);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <h1>
            <CardTitle>{post.title}</CardTitle>
          </h1>
          <CardSubtitle>{post.description}</CardSubtitle>
          <CardText>{post.body}</CardText>
          <Button className="mr-2" onClick={handleEdit}>
            edit
          </Button>
          <Button onClick={handleRemove}>delete</Button>
        </CardBody>
      </Card>
      <hr className="m-2" />
      <Comments
        postId={id}
        comments={post.comments}
        addComment={addComment}
        removeComment={removeComment}
      ></Comments>
    </div>
  );
}

export default PostView;
