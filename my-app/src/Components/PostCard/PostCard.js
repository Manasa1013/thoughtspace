import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";
import { getDateText, getTrimmed } from "../../utils/CommonFunctions";
import "./PostCard.css";
import { usePost } from "../../Contexts/PostContext";
import { EditPost } from "../EditPost/EditPost";
export function PostCard({ post: postData }) {
  const {
    _id: postId,
    likes,
    content: postDescription,
    username,
    createdAt,
    updatedAt,
  } = postData;
  const {
    auth: { user },
  } = useAuth();
  const postToBePassed = postData;
  const {
    openOptionsModal,
    setOpenOptionsModal,
    deletePostHandler,
    setShowEditModal,
    showEditModal,
  } = usePost();
  return (
    <div className="flex flex-row bg-white gap-2 my-4 ">
      <div className="flex flex-row pl-2 my-2">
        <img
          src="http://bit.ly/42Zm7tM"
          className="rounded-full bg-teal-400 w-10 h-10"
          alt="User-Picture"
        />
      </div>
      <div className="flex flex-row bg-white gap-2 my-2">
        <div className="flex flex-col  gap-1 p-4">
          <div className="flex flex-row gap-1 justify-between relative">
            <div className="flex flex-row gap-1">
              <p className="text-teal-800 text-lg leading-4">{username}</p>
              <p className="text-xs text-gray-500 leading-4">{`• ${getDateText(
                createdAt
              )}`}</p>
              <p className="text-cs text-gray-300 leading-4">{`${
                Date.parse(updatedAt) > Date.parse(createdAt) ? "(edited)" : ""
              }`}</p>
            </div>
            {user?.username === username ? (
              <>
                <button
                  className="px-2 icon--button text-teal-700"
                  onClick={() => {
                    console.log("modal open", postId);
                    setOpenOptionsModal((prev) => ({
                      ...prev,
                      visible: !prev.visible,
                      post: postData,
                    }));
                  }}
                >
                  {openOptionsModal.visible &&
                  openOptionsModal.post._id === postData._id ? (
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
                    openOptionsModal.post._id === postData._id
                      ? `flex flex-col gap-1 absolute top-7 border-teal-50 border-2 bg-white right-2`
                      : `flex flex-col gap-1 absolute top-7 border-teal-50 border-2 bg-white right-2 invisible`
                  }
                >
                  {showEditModal.visible && (
                    <EditPost
                      post={postData}
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
                          postId
                        );
                        return {
                          post: postData,
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
                      deletePostHandler(postData);
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
          <div className="break-all">
            <div className="text-teal-800 text-sm text-left">
              <Link to="/users">{`@${username}`}</Link>
            </div>
            <Link to={`/posts/${postId}`}>
              <p className="leading-2">
                {postDescription
                  ? getTrimmed(postDescription, 15)
                  : "No content to display"}
              </p>
            </Link>
          </div>
          <hr className="text-teal-300 pt-2"></hr>
          <div className="flex flex-row justify-between">
            <div className="">
              <span className="text-teal-600">{likes.likeCount}</span>
              <button
                className="icon--button bg-white"
                onClick={() => {
                  //   toggleIsBookMarked(postId);
                  //   console.log(post, isBookmarked);
                }}
              >
                <i className={"fi fi-rs-heart text-teal-600"}></i>
              </button>
            </div>
            <button type="button" className="icon--button">
              <i className="fi fi-rs-comment text-teal-600"></i>
            </button>
            <Link style={{ pointerEvents: "none" }} className="not-allowed">
              <i className="fi fi-rs-share text-teal-600"></i>
            </Link>
            <button
              className="icon--button bg-white"
              onClick={() => {
                //   toggleIsBookMarked(postId);
                //   console.log(post, isBookmarked);
              }}
            >
              <i className={"fi fi-rs-bookmark text-teal-600"}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
