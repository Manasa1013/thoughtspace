import { useState } from "react";
import { useToast } from "../../Contexts/ToastContext";
import { usePost } from "../../Contexts/PostContext";
import { useParams } from "react-router";

export function EditPost({ setShowEditModal, showEditModal }) {
  console.log({ showEditModal }, "at edipost");

  const [post, setPost] = useState(showEditModal?.post);
  const { dispatch, editPostHandler, setOpenOptionsModal } = usePost();
  const { showToastBar } = useToast();
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-2 modal fixed inset-0 z-10 max-h-full overflow-y-auto overflow-x-hidden drop-shadow">
        <section className="md:w-1/4 md:h-1/2 w-2/3 h-auto">
          <article className="modal-content bg-teal-100 ">
            <div className="modal-body flex flex-col gap-2 ">
              <form
                className=" flex flex-col gap-2 p-3 mx-2 mt-2 focus:outline-teal-700/80"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (
                    post?.image?.length === 0 &&
                    post?.content?.length === 0
                  ) {
                    showToastBar("Enter content to continue...");

                    return;
                  } else {
                    setShowEditModal((prev) => ({ ...prev, visible: false }));
                    console.log({ post });
                    editPostHandler({
                      ...post,
                      updatedAt: new Date().toISOString(),
                    });
                    setOpenOptionsModal((prev) => ({
                      ...prev,
                      post: {},
                      visible: false,
                    }));
                  }
                }}
              >
                <textarea
                  name=""
                  id=""
                  cols="40"
                  rows="3"
                  className="w-full bg-teal-100/50 p-4  text-lg border-none resize-none"
                  placeholder="Edit Post..."
                  spellCheck="false"
                  data-ms-editor="true"
                  value={post?.content}
                  onChange={(e) => {
                    console.log(e.target.value);

                    setPost((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }));
                  }}
                ></textarea>
                <button
                  type="submit"
                  className="p-2 border-2 border-teal-700 text-md bg-teal-700/80 text-gray-100 hover:text-white rounded-sm hover:bg-teal-700/100"
                >
                  Save
                </button>
              </form>
            </div>
            <div className="modal-footer w-full flex flex-col justify-center items-stretch">
              <button
                type="button"
                className="p-2 mx-5 mb-2 border-2 border-teal-700/80 text-md  text-teal-800/90 hover:text-teal-700/100 rounded-sm hover:border-teal-700/100 text-center"
                onClick={() => {
                  setShowEditModal((prev) => ({
                    ...prev,
                    visible: false,
                    post: {},
                  }));
                  setOpenOptionsModal((prev) => ({
                    ...prev,
                    visible: false,
                    post: {},
                  }));
                }}
              >
                Close
              </button>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}
