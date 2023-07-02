import { PostCard } from "../PostCard/PostCard";
import "./PostList.css";
import { usePost } from "../../Contexts/PostContext";
import { useState } from "react";
export function PostList({ posts }) {
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
          No Posts to Display
        </h3>
      )}
    </div>
  );
}
