import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./actionTypes";

export function addPost(postId, post) {
  return { type: ADD_POST, postId, post };
}

export function removePost(postId) {
  return { type: REMOVE_POST, postId };
}

export function updatePost(postId, post) {
  return { type: UPDATE_POST, postId, post };
}

export function addComment(postId, commentId, comment) {
  return { type: ADD_COMMENT, postId, commentId, comment };
}

export function removeComment(postId, commentId) {
  return { type: REMOVE_COMMENT, postId, commentId };
}
