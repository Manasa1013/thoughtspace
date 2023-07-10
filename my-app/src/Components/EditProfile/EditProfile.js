import { useState } from "react";
import { useToast } from "../../Contexts/ToastContext";
import { useUser } from "../../Contexts/UserContext";

export function EditProfile({ user, showEditUserModal, setShowEditUserModal }) {
  const { showToastBar } = useToast();
  const { editUserHandler } = useUser();
  const [editUser, setEditUser] = useState(user);
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-2 modal fixed inset-0 z-10 max-h-full overflow-y-auto overflow-x-hidden drop-shadow">
        <section className="md:w-1/2 md:h-1/2 w-2/3 h-auto">
          <article className="modal-content bg-teal-100 ">
            <div className="modal-body flex flex-col gap-2 ">
              <form
                className=" flex flex-col gap-2 p-3 mx-2 mt-2 focus:outline-teal-700/80"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (editUser?.bio?.length === 0) {
                    showToastBar("Something to be written in bio...");

                    return;
                  } else {
                    setShowEditUserModal((prev) => false);
                    console.log({ editUser });
                    editUserHandler({
                      ...editUser,
                      updatedAt: new Date().toISOString(),
                    });
                  }
                }}
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="text-gray-900 block pr-3 py-2 text-sm md:text-base"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    value={editUser?.firstName}
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                    placeholder="FirstName"
                    onInput={(e) => {
                      // console.log(e.target.value, "firstName");
                      return setEditUser((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="text-gray-900 block pr-3 py-2 text-sm md:text-base"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    value={editUser?.lastName}
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                    placeholder="LastName"
                    onInput={(e) => {
                      // console.log(e.target.value, "username");
                      return setEditUser((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="bio"
                    name="bio"
                    className="text-gray-900 block pr-3 py-2 text-sm md:text-base"
                  >
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    cols="40"
                    rows="3"
                    className="w-full bg-white p-2  text-md rounded-md border-none resize-none"
                    placeholder="Edit Bio..."
                    spellCheck="false"
                    data-ms-editor="true"
                    value={editUser?.bio}
                    onChange={(e) => {
                      console.log(e.target.value);

                      setEditUser((prev) => ({
                        ...prev,
                        bio: e.target.value,
                      }));
                    }}
                  ></textarea>
                </div>
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
                  setShowEditUserModal(() => false);
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
