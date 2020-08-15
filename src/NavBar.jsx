import React from "react";
import { NavLink } from "react-router-dom";

import { Nav, NavItem, Jumbotron } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">MicroBlog</h1>
        <p className="lead">Get Blogging</p>
        <hr className="my-2" />

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="mr-2" to="/">
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="mr-2" to="/new">
              Add a new post
            </NavLink>
          </NavItem>
        </Nav>
      </Jumbotron>
    </div>
  );
}

export default NavBar;
