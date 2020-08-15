import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "./Blog";
import PostForm from "./PostForm";
import PostView from "./PostView";
function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"}>
          <Blog></Blog>
        </Route>
        <Route exact path={"/new"}>
          <PostForm></PostForm>
        </Route>
        <Route exact path={"/:id"}>
          <PostView></PostView>
        </Route>
        <Route exact path={"/:id/edit"}>
          <PostForm isEdit={true}></PostForm>
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
