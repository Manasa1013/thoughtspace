import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";
import { usePost } from "../../Contexts/PostContext";
import { EditPost } from "../EditPost/EditPost";
import { CommentCard } from "../CommentCard/CommentCard";
import { getDateText } from "../../utils/CommonFunctions";
import "./PostDetails.css";
import { useUser } from "../../Contexts/UserContext";
export function PostDetails({ post, postId }) {
  const navigate = useNavigate();

  const {
    openOptionsModal,
    setOpenOptionsModal,
    setShowEditModal,
    showEditModal,
    deletePostHandler,
    likePostHandler,
    disLikePostHandler,
    setIsLiked,
    isLikedByUser,
  } = usePost();
  const {
    auth: { user },
  } = useAuth();
  const {
    userBookmarks,
    setIsBookmarked,
    bookmarkPostHandler,
    removeBookmarkHandler,
    getUserByName,
  } = useUser();
  const postUser = getUserByName(post.username);
  console.log(postUser);
  return (
    <section className="p-4" key={postId}>
      <div className="flex flex-row bg-white gap-2 my-4">
        <div className="flex flex-row p-1 m-1 pr-0 aspect-square">
          <img
            src="http://bit.ly/42Zm7tM"
            className="rounded-full bg-teal-400 w-10 h-10"
            alt={
              postUser
                ? `${postUser?.firstName} ${postUser?.lastName}`
                : "UserProfile"
            }
          />
        </div>
        <div className="flex flex-row bg-white gap-2 my-2 w-3/4">
          <div className="flex flex-col  gap-1 p-4">
            <div className="flex flex-row gap-1 justify-between relative">
              <div className="flex flex-row gap-1">
                <p className="text-teal-800 text-lg leading-4">
                  {`${postUser?.firstName} ${postUser?.lastName}`}
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
                      console.log("modal open", post._id);
                      setOpenOptionsModal((prev) => ({
                        ...prev,
                        visible: !prev.visible,
                        post: post,
                      }));
                    }}
                  >
                    {openOptionsModal.visible &&
                    openOptionsModal.post._id === post._id ? (
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
                      openOptionsModal.visible &&
                      openOptionsModal.post._id === post._id
                        ? `flex flex-col gap-1 absolute top-7 border-teal-50 border-2 bg-white right-2`
                        : `flex flex-col gap-1 absolute top-7 border-teal-50 border-2 bg-white right-2 invisible`
                    }
                  >
                    {showEditModal.visible && (
                      <EditPost
                        showEditModal={showEditModal}
                        setShowEditModal={setShowEditModal}
                      />
                    )}
                    <button
                      type="button"
                      className="button-primary p-3 border-teal-50"
                      onClick={(e) => {
                        setShowEditModal(() => {
                          console.log(
                            e.target.parentElement.parentElement.parentElement
                              .parentElement,
                            "at showEditModal ,line 95,POstCard",
                            post._id
                          );
                          return {
                            post: post,
                            visible: true,
                          };
                        });
                      }}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="button-primary p-3 border-teal-50"
                      onClick={() => {
                        deletePostHandler(post);
                        navigate("/posts");
                        setOpenOptionsModal((prev) => ({
                          ...prev,
                          visible: false,
                        }));
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
            <div className="break-word">
              <div className="text-teal-800 text-sm text-left">
                <Link
                  to={`/users/${post.username}`}
                >{`@${post.username}`}</Link>
              </div>
              <p className="leading-2">
                {post?.content ? post.content : "No content to display"}
              </p>
            </div>
            <hr className="text-teal-300 pt-2"></hr>
            <div>
              <div className="flex flex-row justify-between p-1">
                <div className="">
                  <span className="text-teal-600">
                    {post?.likes?.likeCount}
                  </span>
                  <button
                    className="icon--button bg-white"
                    onClick={() => {
                      isLikedByUser(post?.likes)
                        ? disLikePostHandler(post)
                        : likePostHandler(post);
                      setIsLiked((prev) => !prev);
                    }}
                  >
                    <i
                      className={
                        isLikedByUser(post?.likes)
                          ? "fi fi-ss-heart text-red-600 "
                          : "fi fi-rs-heart text-teal-600"
                      }
                    ></i>
                  </button>
                </div>
                <button
                  type="button"
                  className="bg-white"
                  onClick={() => {
                    // console.log(location, `/posts/${post._id}`);
                  }}
                >
                  <i className="fi fi-rs-share text-teal-600"></i>
                </button>
                <button
                  className="icon--button bg-white"
                  onClick={() => {
                    console.log(
                      { userBookmarks },
                      userBookmarks
                        ?.map((bookmarkedPost) => bookmarkedPost._id)
                        .includes(postId)
                    );
                    userBookmarks
                      ?.map((bookmarkedPost) => bookmarkedPost._id)
                      .includes(postId)
                      ? removeBookmarkHandler(post, user.username)
                      : bookmarkPostHandler(post, user.username);
                    setIsBookmarked((prev) => !prev);
                  }}
                >
                  <i
                    className={
                      userBookmarks
                        ?.map((bookmarkedPost) => bookmarkedPost._id)
                        .includes(postId)
                        ? "fi fi-ss-bookmark text-teal-600"
                        : "fi fi-rs-bookmark text-teal-600"
                    }
                  ></i>
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
    </section>
  );
}
