import {
  LOAD_POSTS,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  VOTE_POST,
} from "./actionTypes";

const DEFAULT_STATE = {
  posts: {
    a1: {
      id: "a1",
      title: "why is blue",
      description: " a bit on color theory",
      body: " lots and lots of reason the sky is blue",
      comments: {
        a1: { text: "like blue" },
        a2: { text: "like fav blue" },
      },
      votes: 2,
    },
    a2: {
      id: "a2",
      title: "why is greeb",
      description: " green theory",
      body: " lots and lots grreem",
      votes: 1,
    },
  },
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LOAD_POSTS: {
      const newPosts = {};
      action.posts.forEach((p) => (newPosts[p.id] = p));
      return { ...state, posts: { ...newPosts } };
    }

    case ADD_POST: {
      console.log(action.postId, action.post);
      return {
        ...state,
        posts: { ...state.posts, [action.postId]: action.post },
      };
    }
    case REMOVE_POST: {
      console.log("remove", action.postId);
      const postCopy = { ...state.posts };
      delete postCopy[action.postId];
      console.log(postCopy);
      return { ...state, posts: { ...postCopy } };
    }

    case UPDATE_POST: {
      const postCopy = { ...state.posts };
      postCopy[action.postId] = action.post;
      return { ...state, posts: { ...postCopy } };
    }

    case ADD_COMMENT: {
      const postCopy = { ...state.posts };
      let comments = postCopy[action.postId].comments;
      postCopy[action.postId].comments = {
        ...comments,
        [action.commentId]: action.comment,
      };
      return { ...state, posts: { ...postCopy } };
    }

    case REMOVE_COMMENT: {
      const postCopy = { ...state.posts };
      const comments = postCopy[action.postId].comments;
      delete comments[action.commentId];
      return { ...state, posts: { ...postCopy } };
    }

    case VOTE_POST: {
      const postCopy = { ...state.posts };
      const voted = {
        [action.postId]: {
          ...postCopy[action.postId],
          votes: action.votes.votes,
        },
      };
      return { ...state, posts: { ...postCopy, ...voted } };
    }
    default:
      return state;
  }
}

export default rootReducer;
