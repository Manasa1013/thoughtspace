import { NavLink } from "react-router-dom";
import { usePost } from "../../Contexts/PostContext";

import { getActiveClassName } from "../../utils/CommonFunctions";
import "./LeftSideNav.css";
import { useAuth } from "../../Contexts/AuthContext";
export function LeftSideNav() {
  const { auth } = useAuth();
  return (
    <div className="bg-white p-4 fixed top-0 bottom-0 left-0 mr-12 mt-16 ">
      <div className="flex flex-col justify-between items-center py-4">
        <div className="flex flex-col links-container font-normal items-start">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            <i className="fi fi-rs-home"></i>
            <span className="p-4">Home</span>
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            <i className="fi fi-rs-circle"></i>
            <span className="p-4">Explore</span>
          </NavLink>
          <NavLink
            to={auth?.token ? "/bookmarks" : "/login"}
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            <i className="fi fi-rs-bookmark"></i>
            <span className="p-4">Bookmarks</span>
          </NavLink>
          <NavLink
            to={auth?.token ? `/users/${auth?.user?.username}` : `/login`}
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            <i className="fi fi-rs-user"></i>
            <span className="p-4">Profile</span>
          </NavLink>
        </div>
        <div className="flex text-center my-3 items-start w-full">
          <button
            type="button"
            className="p-3 border-transparent rounded-sm bg-teal-700 text-white"
          >
            Create a Post
          </button>
        </div>
      </div>
    </div>
  );
}
