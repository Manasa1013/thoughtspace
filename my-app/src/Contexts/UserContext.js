import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { UserReducer } from "../Reducers/UserReducer";
import { useToast } from "./ToastContext";
import { useAuth } from "./AuthContext";
export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, {
    users: [],
  });
  const { showToastBar } = useToast();
  const {
    auth: { token, user: authUser },
  } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userBookmarks, setUserBookmarks] = useState([]);
  const [user, setUser] = useState({});
  //bookmark a post to server
  async function bookmarkPostHandler(post, username) {
    try {
      setIsLoading(() => true);
      const response = await fetch(`/api/users/bookmark/${post._id}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: post }),
      });
      console.log({ response });
      const { bookmarks, isBookmarked } = await response.json();

      console.log({ state: state });
      if (response.status === 200) {
        console.log({ bookmarks });
        dispatch({
          type: "BOOKMARK_POST",
          payload: { bookmarks: bookmarks, username: username },
        });
        showToastBar("Added to Bookmarks");
      } else if (response.status === 500) {
        console.log({ bookmarks });
        showToastBar("Error at server , Please try again");
      } else if (response.status === 404) {
        console.log({ bookmarks });
        showToastBar("Login to bookmark");
      } else if (response.status === 400) {
        console.log({ bookmarks });
        showToastBar("Already bookmarked");
      }
      return isBookmarked;
    } catch (err) {
      console.error(err, "at bookmarkPostHandler in UserContext");
      showToastBar("Error! Try again");
    } finally {
      setIsLoading(() => false);
    }
  }

  //remove  a post from bookmarks at server
  async function removeBookmarkHandler(post, username) {
    try {
      setIsLoading(() => true);
      const response = await fetch(`/api/users/remove-bookmark/${post._id}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: post }),
      });
      console.log({ response });
      const { bookmarks } = await response.json();
      console.log({ state: state });
      if (response.status === 200) {
        console.log({ bookmarks });
        dispatch({
          type: "REMOVE_BOOKMARK",
          payload: { bookmarks: bookmarks, username: username },
        });
        showToastBar("Removed from bookmarks");
      } else if (response.status === 500) {
        console.log({ bookmarks });
        showToastBar("Error at server , Please try again");
      } else if (response.status === 404) {
        console.log({ bookmarks });
        showToastBar("Login to remove from bookmarks");
      } else if (response.status === 400) {
        console.log({ bookmarks });
        showToastBar("Already removed from bookmarks");
      }
      return isBookmarked;
    } catch (err) {
      console.error(err, "at bookmarkPostHandler in UserContext");
      showToastBar("Error! Try again");
    } finally {
      setIsLoading(() => false);
    }
  }
  //get users from server
  async function fetchUsers() {
    try {
      setIsLoading(() => true);
      const response = await fetch(`/api/users/`);
      const { users } = await response.json();
      if (response.status === 200) {
        dispatch({ type: "SET_USERS", payload: users });
      }
    } catch (err) {
      console.error("error at fetching users");
      showToastBar("Error at fetching Posts");
    } finally {
      setIsLoading(() => false);
    }
  }

  //get specific user details
  async function fetchUser(userId) {
    try {
      const response = await fetch(`/api/users/${userId}`);
      const { user } = await response.json();
      if (response.status === 200) {
        return user;
      }
    } catch (err) {
      console.error("error at fetching users");
      showToastBar("Error at fetching Posts");
    } finally {
      setIsLoading(() => false);
    }
  }
  // get logged in user bookamarks
  async function fetchUserBookmarks() {
    try {
      setIsLoading(() => true);
      const response = await fetch(`/api/users/bookmark/`, {
        method: "GET",
        headers: { authorization: token },
      });
      const { bookmarks } = await response.json();
      console.log({ response }, "at fetchUserBookmarks");

      if (response.status === 200) {
        dispatch({
          type: "SET_USER_BOOKMARKS",
          payload: { user: authUser, bookmarks: bookmarks },
        });
        return bookmarks;
      } else if (response.status === 500) {
        showToastBar("Error at server, Try again");
      } else if (response.status === 404) {
        showToastBar("Login to view");
      }
    } catch (err) {
      console.error(err, "at fetchUserBookmarks");
      showToastBar("Something went wrong,try again");
    } finally {
      setIsLoading(() => false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  async function isBookmarkedByUser(postId) {
    try {
      console.log(
        Array.isArray(
          state?.users
            ?.find((user) => user.username === authUser.username)
            ?.bookmarks?.map((post) => post?._id)
        )
          ? state?.users
              ?.find((user) => user.username === authUser.username)
              ?.bookmarks?.map((post) => post?._id)
              ?.includes(postId)
          : false
      );
      state?.users
        ?.find((user) => user.username === authUser.username)
        ?.bookmarks?.map((post) => post?._id)
        ?.includes(postId)
        .then((res) => res)
        .catch((err) => console.error(err, "at catch of isBookmarkedByUser"));
    } catch (err) {
      console.error(err, "at isBookmarkPost");
    }
  }
  function getUserByName(username) {
    return state?.users?.find((userItem) => userItem.username === username);
  }

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        bookmarkPostHandler,
        removeBookmarkHandler,
        fetchUserBookmarks,
        fetchUser,
        isLoading,
        isBookmarked,
        setIsBookmarked,
        isBookmarkedByUser,
        userBookmarks,
        setUserBookmarks,
        user,
        setUser,
        getUserByName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
