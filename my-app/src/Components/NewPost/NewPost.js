import { useState } from "react";

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
      <div className="bg-white m-4 mt-2 p-2 ">
        <div className="flex flex-row flex-nowrap">
          <div className="flex flex-row p-1 m-1 pr-0 aspect-square">
            <img
              src="http://bit.ly/42Zm7tM"
              className="rounded-full bg-teal-400 w-10 h-10"
              alt={auth?.user ? auth?.user?.username : "UserProfile-Photo"}
            />
          </div>
          <div className="w-full">
            <textarea
              name=""
              id=""
              cols="50"
              rows="4"
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
              <div className="flex gap-4"></div>
              <button
                type="button"
                className="bg-teal-700 p-8 py-2 text-slate-100 rounded-sm outline-teal-200 outline-offset-0"
                onClick={() => {
                  if (auth.token) {
                    if (post.content === "" && post.image === null) {
                      showToastBar("Write something to post");
                      return;
                    } else {
                      createPostHandler(post);
                    }
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
