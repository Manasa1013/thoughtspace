import { useState } from "react";
import { v4 as uuid } from "uuid";

import { usePost } from "../../Contexts/PostContext";
import { useAuth } from "../../Contexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";

export function NewPost() {
  const { state, dispatch, createPostHandler } = usePost();
  const { auth } = useAuth();
  const { showToastBar } = useToast();
  const [post, setPost] = useState({
    content: "",
    image: null,
  });
  return (
    <>
      <div className="bg-white mr-16 p-2 mt-2">
        <div className="flex flex-row flex-nowrap p-2">
          <div
            className={`bg-teal-600
          rounded-full w-10 h-10
          p-2 mr-2 aspect-square
          `}
          >
            {/* <img
              className="rounded-full bg-gray-500 w-10 h-10 mr-2"
              src="https://pbs.twimg.com/profile_images/1631883791928299521/KGWtSScG_400x400.jpg"
            /> */}
          </div>
          <div className="w-full">
            <textarea
              name=""
              id=""
              cols="50"
              rows="6"
              className="w-full bg-teal-100/50 p-4 focus:outline-teal-100 text-lg border-none resize-none"
              placeholder="Write something interesting..."
              spellCheck="false"
              data-ms-editor="true"
              value={post.content}
              onChange={(e) => {
                console.log(e.target.value);
                setPost((prev) => ({ ...prev, content: e.target.value }));
              }}
            ></textarea>
            <div className="flex justify-between pt-4">
              <div className="flex gap-4">
                <label
                  htmlFor="image-input"
                  name="image-input"
                  className="focus:border-teal-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:border-teal-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>{" "}
                </label>
                <input
                  id="image-input"
                  placeholder=""
                  name="image-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  files={post.image}
                  onChange={(e) => {
                    console.log(e.target.files);
                    setPost((prev) => ({
                      ...prev,
                      image: e.target.files[0],
                    }));
                  }}
                />

                {/* <label htmlFor="emoji-input" name="emoji-input">
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
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  id="emoji-input"
                  name="emoji-input"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                /> */}
              </div>
              <button
                type="button"
                className="bg-teal-700 p-8 py-2 text-slate-100 rounded-sm outline-teal-200 outline-offset-0"
                onClick={() => {
                  if (auth.token) {
                    if (post.content === "" && post.image === null) {
                      showToastBar("Write something to post");
                      return;
                    } else createPostHandler(post);
                    setPost((prev) => ({ ...prev, content: "", image: null }));
                  } else showToastBar("Login to Post");
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
