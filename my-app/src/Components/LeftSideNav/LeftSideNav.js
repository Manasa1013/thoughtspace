import { NavLink } from "react-router-dom";
import { useState } from "react";

import { getActiveClassName } from "../../utils/CommonFunctions";
import "./LeftSideNav.css";
import { useAuth } from "../../Contexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";
import { NewPostModal } from "../NewPostModal/NewPostModal";
export function LeftSideNav() {
  const { auth } = useAuth();
  const { showToastBar } = useToast();
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  return (
    <div className="bg-white md:p-4 md:mr-12 md:mt-16 md:fixed  bottom-0 left-0 md:top-0 sticky p-0">
      <div className="flex md:flex-col flex-row justify-between items-center  md:py-4 p-0">
        <div className="flex md:flex-col flex-row font-normal md:text-md text-lg items-start justify-between w-full">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            <i className="fi fi-rs-home"></i>
            <span className="p-4 hidden md:inline">Home</span>
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            <i className="fi fi-rs-circle"></i>
            <span className="p-4 hidden md:inline">Explore</span>
          </NavLink>
          <NavLink
            to={auth?.token ? "/bookmarks" : "/login"}
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            <i className="fi fi-rs-bookmark"></i>
            <span className="p-4 hidden md:inline">Bookmarks</span>
          </NavLink>
          <NavLink
            to={auth?.token ? `/users/${auth?.user?.username}` : `/login`}
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            <i className="fi fi-rs-user"></i>
            <span className="p-4 hidden md:inline">Profile</span>
          </NavLink>
        </div>
        <div className="relative z-20">
          {showNewPostModal && (
            <NewPostModal
              showNewPostModal={showNewPostModal}
              setShowNewPostModal={setShowNewPostModal}
            />
          )}
        </div>
        <div className="hidden md:flex text-center my-3 items-start w-full ">
          <button
            type="button"
            onClick={() =>
              setShowNewPostModal((prev) => {
                if (auth?.token) {
                  return !prev;
                } else showToastBar("Login to create post");
              })
            }
            className="p-3 border-transparent rounded-sm bg-teal-700 text-white  hidden md:block"
          >
            Create a Post
          </button>
        </div>
        <div className="md:hidden text-center my-3 items-start fixed bottom-20 right-4">
          <button
            type="button"
            onClick={() =>
              setShowNewPostModal((prev) => {
                if (auth?.token) {
                  return !prev;
                } else showToastBar("Login to create post");
              })
            }
            className="p-3 border-transparent rounded-full bg-teal-500/100 hover:bg-teal-800 text-white md:hidden "
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
