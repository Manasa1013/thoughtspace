import { useEffect, useState } from "react";
import {
  Navbar,
  PostList,
  RightSideNav,
  LeftSideNav,
  NewPost,
} from "../Components";
import { usePost } from "../Contexts/PostContext";

export function Explore() {
  const { fetchPosts, state } = usePost();

  useEffect(() => {
    console.log(fetchPosts());
  }, []);
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
          <RightSideNav />
        </aside>
      </div>
    </>
  );
}
