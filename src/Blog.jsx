import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle, Row } from "reactstrap";
import { useSelector } from "react-redux";

function Blog() {
  const posts = useSelector((state) => state);
  return (
    <div>
      <p>Welcome to microblog, blog now, blog here </p>
      <Row>
        {Object.entries(posts).map(([key, value]) => (
          <Card key={key} className="col-sm-6">
            <CardBody>
              <Link to={`/${key}`}>
                <CardTitle>{value.title}</CardTitle>
              </Link>
              <CardText>{value.description}</CardText>
            </CardBody>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Blog;
