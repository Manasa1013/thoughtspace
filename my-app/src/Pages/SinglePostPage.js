import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import {
  Navbar,
  RightSideNav,
  LeftSideNav,
  PostDetails,
  Loader,
} from "../Components";
import { usePost } from "../Contexts/PostContext";

export function SinglePostPage() {
  const { postId } = useParams();
  console.log({ postId });

  const [post, setPost] = useState({});
  const location = useLocation();
  const { fetchSinglePost, isLoading, isLiked } = usePost();
  useEffect(() => {
    fetchSinglePost(postId)
      .then((res) => {
        setPost(() => res);
        console.log({ location }, location.pathname);
      })
      .catch((err) => console.error("err at fetching single post", err));
  }, [isLiked]);
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white">
          <LeftSideNav />
        </aside>
        <main className="main">
          {isLoading ? <Loader /> : <PostDetails post={post} postId={postId} />}
        </main>
        <aside className="bg-white">
          <RightSideNav />
        </aside>
      </div>
    </>
  );
}
