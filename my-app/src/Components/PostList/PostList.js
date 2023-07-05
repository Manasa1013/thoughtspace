import { useEffect } from "react";

import { PostCard } from "../PostCard/PostCard";
import "./PostList.css";
import { usePost } from "../../Contexts/PostContext";
import { useUser } from "../../Contexts/UserContext";
import { useState } from "react";
export function PostList({ posts }) {
  const { fetchUserBookmarks, setUserBookmarks, isBookmarked } = useUser();
  useEffect(() => {
    console.log("running many times");
    fetchUserBookmarks()
      .then((res) => setUserBookmarks(() => res))
      .catch((err) => console.error(err));
  }, [isBookmarked]);
  return (
    <div className="p-4">
      {posts?.length > 0 ? (
        <ul className="list-none">
          {posts?.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="text-teal-700 font-bold text-lg p-3">
          No posts to Display
        </h3>
      )}
    </div>
  );
}
