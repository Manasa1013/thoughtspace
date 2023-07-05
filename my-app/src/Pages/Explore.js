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
  }, [isBookmarked]);
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white">
          <LeftSideNav />
        </aside>
        <main className="main">
          <PostList posts={state?.posts} />
        </main>
        <aside className="bg-white">
          <RightSideNav posts={state?.posts} />
        </aside>
      </div>
    </>
  );
}
