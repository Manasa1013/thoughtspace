import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../../Contexts/AuthContext";
import { usePost } from "../../Contexts/PostContext";
import { getDateText, getTrimmed } from "../../utils/CommonFunctions";
import "./PostDetails.css";
export function PostDetails() {
  const { postId } = useParams();
  console.log({ postId });
  const { fetchSinglePost, openOptionsModal, setOpenOptionsModal } = usePost();
  const [post, setPost] = useState({});
  const location = useLocation();
  const {
    auth: { user },
  } = useAuth();
  useEffect(() => {
    fetchSinglePost(postId)
      .then((res) => setPost(() => res))
      .catch((err) => console.error("err at fetching single post", err));
  }, [postId]);

  return (
    <main className="main" key={postId}>
      <div className="flex flex-row bg-white gap-2 my-4">
        <div className="flex flex-row pl-2 my-2">
          <img
            src="http://bit.ly/42Zm7tM"
            className="rounded-full bg-teal-400 w-10 h-10"
            alt={post.username}
          />
        </div>
        <div className="flex flex-row bg-white gap-2 my-2">
          <div className="flex flex-col  gap-1 p-4">
            <div className="flex flex-row gap-1 justify-between relative">
              <div className="flex flex-row gap-1">
                <p className="text-teal-800 text-lg leading-4">
                  {post.username}
                </p>
                <p className="text-xs text-gray-500 leading-4">{`• ${getDateText(
                  post.createdAt
                )}`}</p>
                <p className="text-cs text-gray-300 leading-4">{`${
                  Date.parse(post.updatedAt) > Date.parse(post.createdAt)
                    ? "(edited)"
                    : ""
                }`}</p>
              </div>
              {user?.username === post.username ? (
                <>
                  <button
                    className="px-2 icon--button text-teal-700"
                    onClick={() => {
                      console.log("modal open", postId);
                      setOpenOptionsModal((prev) => !prev);
                    }}
                  >
                    {openOptionsModal ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                    )}
                  </button>
                  <div
                    className={
                      openOptionsModal
                        ? `flex flex-col gap-1 absolute top-7 border-teal-50 border-2 bg-white right-2`
                        : `flex flex-col gap-1 absolute top-7 border-teal-50 border-2 bg-white right-2 invisible`
                    }
                  >
                    <button
                      type="button"
                      className="button-primary p-3 border-teal-50"
                      onClick={() => {
                        setOpenOptionsModal(() => false);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="button-primary p-3 border-teal-50"
                      onClick={() => {
                        setOpenOptionsModal(() => false);
                      }}
                    >
                      Delete
                    </button>
                  </div>{" "}
                </>
              ) : (
                ""
              )}
            </div>
            <div className="break-all">
              <div className="text-teal-800 text-sm text-left">
                <Link to="/users">{`@${post.username}`}</Link>
              </div>
              <p className="leading-2">
                {post.content
                  ? getTrimmed(post.content, 15)
                  : "No content to display"}
              </p>
            </div>
            <hr className="text-teal-300 pt-2"></hr>
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
    </main>
  );
}

export function CommentCard({ comment, postUserName }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row pl-2 my-2">
          <img
            src="http://bit.ly/42Zm7tM"
            className="rounded-full bg-teal-400 w-10 h-10"
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
