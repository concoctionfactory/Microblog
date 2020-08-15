import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./actionTypes";

const DEFAULT_STATE = {
  a1: {
    title: "why is blue",
    description: " a bit on color theory",
    body: " lots and lots of reason the sky is blue",
    comments: {
      a1: { text: "like blue" },
      a2: { text: "like fav blue" },
    },
  },
  a2: {
    title: "why is greeb",
    description: " green theory",
    body: " lots and lots grreem",
  },
  a3: {
    title: "why is greeb",
    description: " green theory",
    body: " lots and lots grreem",
  },
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      console.log(action.postId, action.post);
      return { ...state, [action.postId]: action.post };
    }
    case REMOVE_POST: {
      const postCopy = { ...state };
      delete postCopy[action.postId];
      return { ...postCopy };
    }

    case UPDATE_POST: {
      const postCopy = { ...state };
      postCopy[action.postId] = action.post;
      return { ...postCopy };
    }

    case ADD_COMMENT: {
      const postCopy = { ...state };
      let comments = postCopy[action.postId].comments;
      postCopy[action.postId].comments = {
        ...comments,
        [action.commentId]: { text: action.comment },
      };
      return { ...postCopy };
    }

    case REMOVE_COMMENT: {
      const postCopy = { ...state };
      const comments = postCopy[action.postId].comments;
      delete comments[action.commentId];
      return { ...postCopy };
    }
    default:
      return state;
  }
}

export default rootReducer;
