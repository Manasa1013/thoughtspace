import { useEffect } from "react";
import { Navbar, PostList, RightSideNav, LeftSideNav } from "../Components";
import { usePost } from "../Contexts/PostContext";
import { useUser } from "../Contexts/UserContext";

export function Explore() {
  const { fetchPosts, state } = usePost();
  const { isBookmarked } = useUser();
  useEffect(() => {
    console.log(fetchPosts());
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white aside-left">
          <LeftSideNav />
        </aside>
        <main className="main">
          <PostList posts={state?.posts} />
        </main>
        <aside className="bg-white aside-right">
          <RightSideNav posts={state?.posts} />
        </aside>
      </div>
    </>
  );
}
