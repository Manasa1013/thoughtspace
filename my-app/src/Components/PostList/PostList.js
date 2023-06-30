import { PostCard } from "../PostCard/PostCard";
import "./PostList.css";
import { usePost } from "../../Contexts/PostContext";
export function PostList() {
  const { state } = usePost();
  console.log({ state });
  return (
    <main className="p-3">
      <h2 className="p-2">Latest Posts</h2>
      <ul className="list-none">
        {state?.posts?.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
