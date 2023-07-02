import { PostCard } from "../PostCard/PostCard";
import "./PostList.css";
import { usePost } from "../../Contexts/PostContext";
import { useState } from "react";
export function PostList({ posts }) {
  return (
    <div className="p-3">
      <h2 className="p-2">Latest Posts</h2>
      <ul className="list-none">
        {posts?.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
