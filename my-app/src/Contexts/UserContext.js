import { createContext, useContext, useEffect, useReducer } from "react";

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
    auth: { token },
  } = useAuth();
  async function bookmarkPostHandler(post, username) {
    try {
      //   setIsLoading(() => true);
      const response = await fetch(`/api/users/bookmark/${post._id}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: post }),
      });
      console.log({ response });
      const { bookmarks } = await response.json();
      console.log({ userState: state });
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
    } catch (err) {
      console.error(err, "at bookmarkPostHandler in PostContext");
      showToastBar("Error! Try again");
    } finally {
      //   setIsLoading(() => false);
    }
  }
  async function fetchUsers() {
    try {
      // setIsLoading(() => true);
      const response = await fetch("/api/users");
      const { users } = await response.json();
      if (response.status === 200) {
        console.log({ users });
        dispatch({ type: "SET_USERS", payload: users });
      }
    } catch (err) {
      console.error("error at fetching users");
      showToastBar("Error at fetching Posts");
    } finally {
      //   setIsLoading(() => true);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <UserContext.Provider value={{ state, dispatch, bookmarkPostHandler }}>
      {children}
    </UserContext.Provider>
  );
}
