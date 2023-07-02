import { useEffect, useState } from "react";
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
  const { fetchUserPosts, state } = usePost();

  const {
    auth: { user },
  } = useAuth();
  useEffect(() => {
    console.log(fetchUserPosts(user?.username));
    fetchUserPosts(user?.username)
      .then((res) => {
        console.log({ res }, "at home");
      })
      .catch((err) => {
        console.error(err, "error at fetchin user posts");
      });
  }, []);
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
          <RightSideNav />
        </aside>
      </div>
    </>
  );
}
