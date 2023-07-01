import { Link, useParams, useLocation } from "react-router-dom";

import { usePost } from "../../Contexts/PostContext";
import { getDateText, getTrimmed } from "../../utils/CommonFunctions";
import "./PostDetails.css";
import { useEffect, useState } from "react";
export function PostDetails() {
  const { postId } = useParams();
  console.log({ postId });
  const { state, fetchSinglePost } = usePost();
  const [post, setPost] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetchSinglePost(postId)
      .then((res) => setPost(() => res))
      .catch((err) => console.error("err at fetching single post", err));
  }, [postId]);

  return (
    <main className="main" key={postId}>
      <Link to="/posts">
        <h2>
          {" "}
          <i>←</i> Post
        </h2>
      </Link>
      {state?.posts && (
        <div className="flex flex-row bg-white gap-2 my-4">
          <div className="post-content p-x">
            <div className="post-user">{(post.username, post._id)}</div>
            <p className="leading-1">{getDateText(post.createdAt)}</p>

            <div className="flex flex-col break-word p-1">
              <p className="leading-2">
                {post.content
                  ? getTrimmed(post.content, 15)
                  : "No content to display"}
              </p>
            </div>
            <hr className="bg-teal-600"></hr>
            <div>
              <div className="flex flex-row justify-between p-1">
                <div
                  className="bg-white"
                  onClick={() => {
                    console.log(location, `/posts/${post._id}`);
                  }}
                >
                  <i className="fi fi-rs-share text-teal-600"></i>
                </div>
                <button className="icon--button bg-white" onClick={() => {}}>
                  <i className={"fi fi-rs-bookmark text-teal-600"}></i>
                </button>
              </div>
              <ul className="list">
                {post?.comments &&
                  post.comments?.map((comment) => (
                    <CommentCard
                      key={comment?._id}
                      comment={comment}
                      postUserName={post.username}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export function CommentCard({ comment, postUserName }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex p-4">
          <img
            src={comment.picUrl}
            className="w-10 h-10 p-2"
            width="40"
            height="40"
            alt={comment.username}
          />
        </div>
        <div className="flex p-4 flex-col">
          <div className="p-1 text-gray-900">{comment.username}</div>
          <div className="p-1">Replying to {postUserName}</div>
          <div className="p-1">{comment.comment}</div>
          <div className="flex flex-row justify-between p-1">
            <button className="icon--button bg-white">
              <i className="fi fi-rs-heart text-teal-600"></i>
            </button>
            <button className="icon--button bg-white">
              <i className="fi fi-rs-comment text-teal-600"></i>
            </button>
            <button className="icon--button bg-white">
              <i className="fi fi-rs-share text-teal-600"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
