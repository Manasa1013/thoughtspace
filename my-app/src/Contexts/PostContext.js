import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { PostReducer } from "../Reducers/PostReducer";
import { useToast } from "./ToastContext";
import { useAuth } from "./AuthContext";
export const PostContext = createContext();

export function usePost() {
  return useContext(PostContext);
}

export function PostProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const { showToastBar } = useToast();
  const {
    auth: { token },
  } = useAuth();
  async function fetchPosts() {
    try {
      setIsLoading(() => true);
      const response = await fetch("/api/posts");
      const { posts } = await response.json();
      if (response.status === 200) {
        console.log({ posts });
        dispatch({ type: "SET_POSTS", payload: posts });
      }
    } catch (err) {
      console.error("error at fetching posts");
      showToastBar("Error at fetching Posts");
    } finally {
      setIsLoading(() => true);
    }
  }
  async function createPostHandler(post) {
    try {
      setIsLoading(() => true);
      console.log({ post });
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: post }),
      });
      console.log({ response });
      const { posts } = await response.json();
      if (response.status === 201) {
        console.log({ posts });
        dispatch({ type: "ADD_POST", payload: posts });
      }
    } catch (err) {
      console.error(err, "error at creating posts");
    } finally {
      setIsLoading(() => false);
    }
  }
  const [state, dispatch] = useReducer(PostReducer, {
    posts: [],
  });
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <PostContext.Provider
      value={{ state, dispatch, fetchPosts, createPostHandler }}
    >
      {children}
    </PostContext.Provider>
  );
}
