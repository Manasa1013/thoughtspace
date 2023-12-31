export function PostReducer(state, action) {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: [...action.payload] };
    case "ADD_POST":
      return { ...state, posts: [...action.payload] };
    case "EDIT_POST":
      return { ...state, posts: [...action.payload] };
    case "DELETE_POST":
      return { ...state, posts: [...action.payload] };
    case "LIKE_POST":
      return { ...state, posts: [...action.payload] };
    case "DISLIKE_POST":
      return { ...state, posts: [...action.payload] };
    default:
      return state;
  }
}
