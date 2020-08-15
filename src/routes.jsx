import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "./Blog";
import PostForm from "./PostForm";
import PostView from "./PostView";
function Routes() {
  const INITIAL_STATE = [
    {
      id: "1",
      title: "why is blue",
      description: " a bit on color theory",
      body: " lots and lots of reason the sky is blue",
      comments: [
        { id: "1", text: "like blue" },
        { id: "2", text: "like fav blue" },
      ],
    },
    {
      id: "2",
      title: "why is greeb",
      description: " green theory",
      body: " lots and lots grreem",
    },
    {
      id: "3",
      title: "why is greeb",
      description: " green theory",
      body: " lots and lots grreem",
    },
  ];
  const [posts, setPosts] = useState(INITIAL_STATE);
  const addPost = (post) => {
    setPosts([...posts, post]);
  };
  const removePost = (id) => {
    setPosts(posts.filter((c) => c.id !== id));
  };

  const updatePost = (post) => {
    setPosts(
      posts.map((p) => {
        if (p.id === post.id) {
          return post;
        }
        return p;
      })
    );
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, comment] };
        }
        return post;
      })
    );
  };

  const removeComment = (postId, commentId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments.filter((c) => c.id !== commentId)],
          };
        }
        return post;
      })
    );
  };

  return (
    <div>
      <Switch>
        <Route exact path={"/"}>
          <Blog posts={posts}></Blog>
        </Route>
        <Route exact path={"/new"}>
          <PostForm addPost={addPost}></PostForm>
        </Route>
        <Route exact path={"/:id"}>
          <PostView
            posts={posts}
            removePost={removePost}
            addComment={addComment}
            removeComment={removeComment}
          ></PostView>
        </Route>
        <Route exact path={"/:id/edit"}>
          <PostForm posts={posts} addPost={updatePost} isEdit={true}></PostForm>
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
