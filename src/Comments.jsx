import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

function Comments({ postId, comments, addComment, removeComment }) {
  console.log(comments);

  const INITIAL_FORM_STATE = "";
  const [commentForm, setCommentForm] = useState([INITIAL_FORM_STATE]);

  const handleChange = (e) => {
    const { value } = e.target;
    setCommentForm(value);
  };

  const handleAddComment = () => {
    addComment(postId, { id: uuidv4, text: commentForm });
    setCommentForm("");
  };

  const commentList = () => {
    return (
      <ListGroup>
        {comments.map((c) => (
          <ListGroupItem key={c.id}>
            <p>{c.text}</p>
            <Button onClick={() => removeComment(postId, c.id)}>X</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  };
  return (
    <div>
      <h4>Comments</h4>
      {comments && commentList()}
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="comment"
            id="comment"
            placeholder="new comment"
            onChange={handleChange}
            value={commentForm}
          />
          <Button onClick={handleAddComment}>add</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Comments;
