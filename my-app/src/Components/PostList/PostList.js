import { PostCard } from "../PostCard/PostCard";
import "./PostList.css";
import { usePost } from "../../Contexts/PostContext";
import { useState } from "react";
import { EditPost } from "../EditPost/EditPost";
export function PostList() {
  const { state } = usePost();
  const [showEditModal, setShowEditModal] = useState({
    visible: false,
    post: {},
  });
  console.log({ state });
  return (
    <main className="p-3">
      <h2 className="p-2">Latest Posts</h2>
      <ul className="list-none">
        {state?.posts?.map((post) => (
          <li key={post._id}>
            <PostCard
              post={post}
              showEditModal={showEditModal}
              setShowEditModal={setShowEditModal}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
