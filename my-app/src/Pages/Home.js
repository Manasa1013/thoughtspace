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
import { useUser } from "../Contexts/UserContext";

export function Home() {
  const { fetchUserPosts, state, isLiked } = usePost();

  const {
    auth: { user },
  } = useAuth();
  const { isBookmarked } = useUser();
  useEffect(() => {
    fetchUserPosts(user?.username)
      .then((res) => {
        console.log({ res }, "at home");
      })
      .catch((err) => {
        console.error(err, "error at fetchin user posts");
      });
  }, [isLiked, isBookmarked]);
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white">
          <LeftSideNav />
        </aside>
        <main className="main">
          <NewPost />
          <PostList posts={state?.posts} />
        </main>
        <aside className="bg-white">
          <RightSideNav posts={state?.posts} />
        </aside>
      </div>
    </>
  );
}
