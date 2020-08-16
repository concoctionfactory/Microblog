import axios from "axios";
import {
  LOAD_POSTS,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  VOTE_POST,
} from "./actionTypes";

const API_URL = "//localhost:5000/api";

export function getPostAPI(id = "") {
  return async function (dispatch) {
    try {
      let res = await axios.get(`${API_URL}/posts`);
      dispatch(gotPosts(res.data));
    } catch (e) {
      dispatch(gotError(e));
    }
  };
}

function gotPosts(posts) {
  return { type: LOAD_POSTS, posts };
}

function gotError(msg) {
  return { type: "ERROR", msg };
}

export function addPostAPI(post) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${API_URL}/posts`, post);
      dispatch(addPost(data.id, data));
    } catch (e) {
      dispatch(gotError(e));
    }
  };
}
export function addPost(postId, post) {
  return { type: ADD_POST, postId, post };
}

export function removePostAPI(postId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`${API_URL}/posts/${postId}`);
      dispatch(removePost(postId));
    } catch (e) {
      dispatch(gotError(e));
    }
  };
}
export function removePost(postId) {
  console.log(postId);

  return { type: REMOVE_POST, postId };
}

export function updatePostAPI(postId, post) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(`${API_URL}/posts/${postId}`, post);
      dispatch(updatePost(postId, post));
    } catch (e) {
      dispatch(gotError(e));
    }
  };
}

export function updatePost(postId, post) {
  return { type: UPDATE_POST, postId, post };
}

export function getCommentsAPI(postId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API_URL}/posts/${postId}/comments`);
      data.forEach((d) => {
        dispatch(addComment(postId, d.id, d));
      });
    } catch (e) {
      dispatch(gotError(e));
    }
  };
}

export function addCommentAPI(postId, comment) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `${API_URL}/posts/${postId}/comments`,
        comment
      );
      dispatch(addComment(postId, data.id, data));
    } catch (e) {
      dispatch(gotError(e));
    }
  };
}
export function addComment(postId, commentId, comment) {
  return { type: ADD_COMMENT, postId, commentId, comment };
}

export function removeCommentAPI(postId, commentId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(
        `${API_URL}/posts/${postId}/comments/${commentId}`
      );
      dispatch(removeComment(postId, commentId));
    } catch (e) {
      dispatch(gotError(e));
    }
  };
}
export function removeComment(postId, commentId) {
  return { type: REMOVE_COMMENT, postId, commentId };
}

export function votePostAPI(postId, direction = "up") {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `${API_URL}/posts/${postId}/vote/${direction}`
      );
      dispatch(votePost(postId, data));
    } catch (e) {
      dispatch(gotError(e));
    }
  };
}

function votePost(postId, votes) {
  return { type: VOTE_POST, postId, votes };
}
