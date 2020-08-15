import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle, Row } from "reactstrap";
import { useSelector } from "react-redux";

function Blog({ posts }) {
  //const posts = useSelector((state) => state.posts);
  return (
    <div>
      <p>Welcome to microblog, blog now, blog here </p>
      <Row>
        {posts.map((p) => (
          <Card key={p.id} className="col-sm-6">
            <CardBody>
              <Link to={`/${p.id}`}>
                <CardTitle>{p.title}</CardTitle>
              </Link>
              <CardText>{p.description}</CardText>
            </CardBody>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Blog;
