import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Comments from "./Comments";
import { useSelector, useDispatch } from "react-redux";
import { removePost } from "./actions";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function PostView() {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();
  const id = useParams().id;
  const post = posts[id];

  const handleRemove = () => {
    dispatch(removePost(id));
    history.push("/");
  };

  const handleEdit = () => {
    history.push(`/${id}/edit`);
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
      <Comments postId={id} comments={post.comments}></Comments>
    </div>
  );
}

export default PostView;
