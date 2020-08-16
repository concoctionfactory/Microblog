import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
  CardFooter,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPostAPI } from "./actions";
import Votes from "./Votes";

function Blog() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAPI());
  }, [dispatch]);

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
            <CardFooter className="text-right">
              <Votes postId={key} votes={value.votes}></Votes>
            </CardFooter>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Blog;
