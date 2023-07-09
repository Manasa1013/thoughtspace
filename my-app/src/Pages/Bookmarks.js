import { useEffect, useState } from "react";

import {
  Navbar,
  PostList,
  LeftSideNav,
  Loader,
  RightSideNav,
} from "../Components";
import { useAuth } from "../Contexts/AuthContext";
import { useUser } from "../Contexts/UserContext";
import { usePost } from "../Contexts/PostContext";
import { useToast } from "../Contexts/ToastContext";
import { useLocation } from "react-router";

export function Bookmarks() {
  const {
    state: userState,
    fetchUserBookmarks,
    isUserLoading,
    userBookmarks,
    setUserBookmarks,
  } = useUser();
  const {
    auth: { user },
  } = useAuth();
  const { state: postState } = usePost();
  const { showToastBar } = useToast();

  const location = useLocation();

  useEffect(() => {
    console.log({ userBookmarks });
    fetchUserBookmarks()
      .then((res) => {
        console.log({ res }, { userBookmarks }, "at Bookmarks");
        setUserBookmarks(
          () =>
            res ??
            userState?.users?.filter(
              (userItem) => userItem.username === user.username
            )[0]?.bookmarks
        );
      })
      .catch((err) => {
        console.error(err, "error at displaying User Bookmarks");
        showToastBar("Error at displaying Bookmarks");
      });
  }, []);

  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white aside-left">
          <LeftSideNav />
        </aside>
        <main className="main">
          <h2 className="text-teal-700 font-semibold text-2xl leading-4 p-4">
            {" "}
            Bookmarks
          </h2>
          {isUserLoading ? <Loader /> : <PostList posts={userBookmarks} />}
        </main>
      </div>
    </>
  );
}
