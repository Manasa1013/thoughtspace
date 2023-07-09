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
    case "SET_FOLLOW_USER":
      return {
        ...state,
        users: state?.users?.map((userItem) => {
          if (userItem._id === action.payload.user._id)
            return { ...action.payload.user };
          else if (userItem._id === action.payload.followUser._id) {
            return { ...action.payload.followUser };
          } else return userItem;
        }),
      };
    case "SET_UNFOLLOW_USER":
      return {
        ...state,
        users: state?.users?.map((userItem) => {
          if (userItem._id === action.payload.user._id)
            return { ...action.payload.user };
          else if (userItem._id === action.payload.followUser._id) {
            return { ...action.payload.followUser };
          } else return userItem;
        }),
      };
    case "SET_EDITED_USER":
      console.log(action.payload, state, "at setediteduser");
      return {
        ...state,
        users: state?.users?.map((userItem) => {
          if (userItem._id === action.payload.user._id)
            return { ...action.payload.user };
          else return userItem;
        }),
      };
    default:
      return state;
  }
}
