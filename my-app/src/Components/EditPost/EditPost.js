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
      <section className="flex align-center justify-center gap-2 modal fixed top-0 bottom-0 right-0 left-0 bg-gray-100 z-10 max-h-full overflow-y-auto overflow-x-hidden md:inset-0">
        <article className="modal-content bg-teal-100 ">
          <div className="modal-body flex flex-col gap-2 ">
            <form
              className=" flex flex-col gap-2 p-4 m-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (post?.image?.length === 0 && post?.content?.length === 0) {
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
                className="w-full bg-teal-100/50 p-4 focus:outline-teal-100 text-lg border-none resize-none"
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
                className="p-2 border-2 border-teal-700 text-md hover:bg-teal-700 hover:text-gray-100"
              >
                Save
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="p-4"
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
    </>
  );
}
