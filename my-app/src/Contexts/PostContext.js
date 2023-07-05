import { createContext, useContext, useReducer, useState } from "react";

import { PostReducer } from "../Reducers/PostReducer";
import { useToast } from "./ToastContext";
import { useAuth } from "./AuthContext";
import { useUser } from "./UserContext";
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

  //gets posts from server
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
  // gets specific user posts from server
  async function fetchUserPosts(username) {
    try {
      setIsLoading(() => true);
      const response = await fetch(`/api/posts/user/${username}`);
      const { posts } = await response.json();
      if (response.status === 200) {
        dispatch({ type: "SET_POSTS", payload: posts });
      }
    } catch (err) {
      console.error("error at fetching posts");
      showToastBar("Error at fetching Posts");
    } finally {
      setIsLoading(() => true);
    }
  }
  // gets specific post using id
  async function fetchSinglePost(postId) {
    try {
      setIsLoading(() => true);
      const response = await fetch(`/api/posts/${postId}`);
      console.log({ response });
      const { post } = await response.json();
      if (response.status === 200) {
        console.log({ post }, "at fetch single post");
        return post;
      }
    } catch (err) {
      console.error(err, "error at fetching single post");
    } finally {
      setIsLoading(() => false);
    }
  }

  // posts a post to server
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

  // edits already saved post and send to server
  async function editPostHandler(post) {
    try {
      setIsLoading(() => true);
      console.log({ post });
      const response = await fetch(`/api/posts/edit/${post._id}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: post }),
      });
      console.log({ response });
      const { posts } = await response.json();
      if (response.status === 201) {
        console.log({ posts });
        dispatch({ type: "EDIT_POST", payload: posts });
      } else if (response.status === 500) {
        console.log({ posts });
        showToastBar("Error at server , Please try again");
      }
    } catch (err) {
      console.error(err, "error at editing posts");
    } finally {
      setIsLoading(() => false);
    }
  }

  // deletes a specific post
  async function deletePostHandler(post) {
    try {
      setIsLoading(() => true);
      console.log({ post });
      const response = await fetch(`/api/posts/${post._id}`, {
        method: "DELETE",
        headers: { authorization: token },
        body: JSON.stringify({ postData: post }),
      });
      console.log({ response });
      const { posts } = await response.json();
      if (response.status === 201) {
        console.log({ posts });
        dispatch({ type: "DELETE_POST", payload: posts });
        showToastBar("Deleted Post");
      } else if (response.status === 500) {
        console.log({ posts });
        showToastBar("Error at server , Please try again");
      } else if (response.status === 404) {
        console.log({ posts });
        showToastBar("Login to delete the post");
      } else if (response.status === 400) {
        console.log({ posts });
        showToastBar("Cannot delete other user posts");
      }
    } catch (err) {
      console.error(err, "error at editing posts");
      showToastBar("Error at deleting the post");
    } finally {
      setIsLoading(() => false);
    }
  }

  // likes a post
  async function likePostHandler(post) {
    try {
      setIsLoading(() => true);
      const response = await fetch(`/api/posts/like/${post._id}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: post }),
      });
      console.log({ response });
      const { posts } = await response.json();

      if (response.status === 201) {
        console.log({ posts });
        dispatch({ type: "LIKE_POST", payload: posts });
        showToastBar("Post is Liked");
      } else if (response.status === 500) {
        console.log({ posts });
        showToastBar("Error at server , Please try again");
      } else if (response.status === 404) {
        console.log({ posts });
        showToastBar("Login to like the post");
      } else if (response.status === 400) {
        console.log({ posts });
        showToastBar("Already liked the post");
      }
    } catch (err) {
      console.error(err, "at likePostHandler at PostContext");
      showToastBar("Error! Try again");
    } finally {
      setIsLoading(() => false);
    }
  }
  // unlikes the post already liked
  async function disLikePostHandler(post) {
    try {
      setIsLoading(() => true);
      const response = await fetch(`/api/posts/dislike/${post._id}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: post }),
      });
      console.log({ response });
      const { posts } = await response.json();

      if (response.status === 201) {
        console.log({ posts });
        dispatch({ type: "DISLIKE_POST", payload: posts });
        showToastBar("Post is unliked");
      } else if (response.status === 500) {
        console.log({ posts });
        showToastBar("Error at server , Please try again");
      } else if (response.status === 404) {
        console.log({ posts });
        showToastBar("Login to unlike");
      } else if (response.status === 400) {
        console.log({ posts });
        showToastBar("Already unliked the post");
      }
    } catch (err) {
      console.error(err, "at dislikePostHandler at PostContext");
      showToastBar("Error! Try again");
    } finally {
      setIsLoading(() => false);
    }
  }
  const { auth } = useAuth();
  const [state, dispatch] = useReducer(PostReducer, {
    posts: [],
  });
  const [openOptionsModal, setOpenOptionsModal] = useState({
    post: {},
    visible: false,
  });
  const [showEditModal, setShowEditModal] = useState({
    visible: false,
    post: {},
  });
  const [isLiked, setIsLiked] = useState(false);
  function isLikedByUser(likes) {
    return likes?.likedBy
      .map((likedUser) => likedUser.username)
      .includes(auth?.user?.username);
  }

  return (
    <PostContext.Provider
      value={{
        state,
        dispatch,
        openOptionsModal,
        setOpenOptionsModal,
        fetchPosts,
        fetchUserPosts,
        fetchSinglePost,
        createPostHandler,
        editPostHandler,
        deletePostHandler,
        likePostHandler,
        disLikePostHandler,
        showEditModal,
        setShowEditModal,
        isLiked,
        setIsLiked,
        isLikedByUser,
        isLoading,
        setIsLoading,
        // isBookmarkedByUser,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
