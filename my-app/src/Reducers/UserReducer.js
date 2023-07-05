export function UserReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_USER_BOOKMARKS":
      return {
        ...state,
        users: state?.users?.map((user) => {
          if (user.username === action.payload.username) {
            return { ...user, bookmarks: { ...action.payload.bookmarks } };
          } else return user;
        }),
      };
    case "BOOKMARK_POST":
      console.log({ userState: state }, action.payload);
      return {
        ...state,
        users: state?.users?.map((user) => {
          if (user.username === action.payload.username) {
            return { ...user, bookmarks: { ...action.payload.bookmarks } };
          } else return user;
        }),
      };
    case "REMOVE_BOOKMARK":
      console.log({ userState: state }, action.payload);
      return {
        ...state,
        users: state?.users?.map((user) => {
          if (user.username === action.payload.username) {
            return { ...user, bookmarks: { ...action.payload.bookmarks } };
          } else return user;
        }),
      };
    default:
      return state;
  }
}
