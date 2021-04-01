import { STORE_POSTS } from "../actions";

const initialState = {
  posts: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_POSTS:
      return {
        ...state,
        posts: Object.assign([], action.posts),
      };
    default:
      return state;
  }
}
