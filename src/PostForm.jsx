import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { updatePost, addPost } from "./actions";

function PostForm({ isEdit = false }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);
  const history = useHistory();
  const id = useParams().id;

  let INITIAL_STATE = {
    title: "",
    description: "",
    body: "",
  };

  if (isEdit) {
    const post = posts[id];
    INITIAL_STATE = {
      title: post.title,
      description: post.description,
      body: post.body,
    };
  }
  const [form, setForm] = useState(INITIAL_STATE);

  useEffect(() => {
    setForm(INITIAL_STATE);
  }, [isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(form);
    let action = isEdit ? updatePost(id, form) : addPost(uuidv4(), form);
    dispatch(action);
    history.push("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/");
  };
  console.log("form");

  return (
    <div>
      <h2>New Post</h2>
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={form.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            value={form.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="body">Body</Label>
          <Input
            type="textarea"
            name="body"
            id="body"
            onChange={handleChange}
            value={form.body}
          />
        </FormGroup>
        <Button onClick={handleSave} color="primary" className="mr-2">
          Save
        </Button>
        <Button onClick={handleCancel} color="secondary">
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default PostForm;
