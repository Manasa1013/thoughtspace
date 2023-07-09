import { useEffect } from "react";
import {
  Navbar,
  PostList,
  RightSideNav,
  LeftSideNav,
  NewPost,
} from "../Components";
import { useAuth } from "../Contexts/AuthContext";
import { usePost } from "../Contexts/PostContext";

export function Home() {
  const { fetchUserPosts, state, isLiked } = usePost();

  const {
    auth: { user },
  } = useAuth();
  useEffect(() => {
    fetchUserPosts(user?.username)
      .then((res) => {
        console.log({ res }, "at home");
      })
      .catch((err) => {
        console.error(err, "error at fetching user posts");
      });
  }, [isLiked]);
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white aside-left">
          <LeftSideNav />
        </aside>
        <main className="main">
          <NewPost />
          <PostList posts={state?.posts} />
        </main>
        <aside className="bg-white aside-right">
          <RightSideNav posts={state?.posts} />
        </aside>
      </div>
    </>
  );
}
