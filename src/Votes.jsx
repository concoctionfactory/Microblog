import React from "react";
import { useDispatch } from "react-redux";
import { votePostAPI } from "./actions";
import { Button } from "reactstrap";

function Vote({ postId, votes }) {
  const dispatch = useDispatch();

  const handleVote = (direction = "up") => {
    dispatch(votePostAPI(postId, direction));
  };
  return (
    <div>
      <span className="mr-2">{votes} votes</span>
      <Button className="mr-2" onClick={() => handleVote()}>
        up
      </Button>
      <Button onClick={() => handleVote("down")}> down</Button>
    </div>
  );
}

export default Vote;
