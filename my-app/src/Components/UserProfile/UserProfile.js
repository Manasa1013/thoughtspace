import { useEffect, useState } from "react";

import { useAuth } from "../../Contexts/AuthContext";
import { useUser } from "../../Contexts/UserContext";
import { usePost } from "../../Contexts/PostContext";
import { PostList } from "../PostList/PostList";
import "./UserProfile.css";
import { EditProfile } from "../EditProfile/EditProfile";
export function UserProfile2() {
  const { auth, setAuth, logoutHandler } = useAuth();
  const { state: userState } = useUser();
  console.log({ auth });
  return (
    <>
      <div className="bg-white mr-16 p-2 mt-2 text-teal-800">
        <div className="flex flex-column flex-nowrap p-2">
          <img
            className="rounded-full bg-gray-500 w-12 h-12 mr-2 aspect-square"
            src="https://pbs.twimg.com/profile_images/1631883791928299521/KGWtSScG_400x400.jpg"
          />
          <div className="w-full">
            <div className="w-full bg-white p-4 border-teal-100 text-lg  resize-none">
              <p className="para">{auth?.user?.username}</p>
            </div>
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
                  onChange={(e) => {
                    console.log(e.target.files);
                  }}
                />
              </div>
              <button
                className="bg-teal-700 p-8 py-2 text-slate-100 rounded-sm outline-teal-200 outline-offset-0"
                type="button"
                onClick={() => {
                  logoutHandler();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function UserProfile({ username }) {
  const { auth, setAuth, logoutHandler } = useAuth();
  const { state: userState, getUserByName } = useUser();
  const { state: postState, fetchUserPosts } = usePost();
  const foundUser = getUserByName(username);
  useEffect(() => {
    fetchUserPosts(username)
      .then((res) => {
        console.log(res, "at UserProfile");
      })
      .catch((err) => {
        console.error(err, "error at fetching user posts");
      });
  }, [foundUser?.updatedAt, username]);
  console.log({ foundUser });
  return (
    <>
      <div className="text-teal-800 w-96 bg-gray-100 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center bg-white w-11/12  ">
          <div className="flex md:flex-row flex-col items-center justify-evenly bg-white text-teal-800">
            <div className="w-3/4 flex flex-col items-center justify-center object-cover">
              <img
                className="rounded-full bg-teal-500 md:w-32 md:h-32 h-24 w-24 m-2 aspect-square"
                src={
                  foundUser?.avatarUrl
                    ? foundUser?.avatarUrl
                    : "http://bit.ly/42Zm7tM"
                }
              />
            </div>
            <div className="flex flex-col items-center justify-between bg-white ">
              <div className="flex flex-col items-center justify-center">
                <h3 className="pt-4 text-lg leading-4 font-semibold">
                  {foundUser?.firstName + "  " + foundUser?.lastName}
                </h3>
                <p className="leading-4 text-gray-400 text-sm font-medium pt-1">{`@${foundUser?.username}`}</p>
                <p className="py-4 my-2 text-teal-900 text-sm break-words leading-1">
                  {foundUser?.bio}
                </p>
              </div>
              <FollowDetails user={foundUser} />
              <div className="py-1 my-1 text-blue-500 text-sm break-all">
                {foundUser?.website}
              </div>
            </div>
          </div>
          <FollowCard foundUser={foundUser} postState={postState} />
        </div>
        <hr className="border-gray-100 border-2 bg-gray-100 "></hr>
        <div className="m-2 w-full">
          <PostList posts={postState?.posts} />
        </div>
      </div>
    </>
  );
}

export function FollowDetails({ user }) {
  const { auth } = useAuth();
  const { followUserHandler, unfollowUserHandler } = useUser();
  const [isFollowing, setIsFollowing] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  return (
    <section className="relative">
      {showEditUserModal && (
        <EditProfile
          user={user}
          showEditUserModal={showEditUserModal}
          setShowEditUserModal={setShowEditUserModal}
        />
      )}
      {user?.username === auth?.user?.username && (
        <button
          type="button"
          onClick={() => {
            setShowEditUserModal((prev) => !prev);
          }}
          className="text-teal-700 bg-white border-teal-700 font-semibold text-md py-3 px-2 m-2"
        >
          Edit Profile
        </button>
      )}
      {user?.username !== auth?.user?.username && (
        <button
          type="button"
          className="text-teal-700 bg-white border-teal-700 font-semibold text-md py-3 px-2 m-2"
          onClick={() => {
            isFollowing
              ? unfollowUserHandler(user?._id)
              : followUserHandler(user?._id);
            console.log(user?._id);
            setIsFollowing((prev) => !prev);
          }}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      )}
    </section>
  );
}

export function FollowCard({ postState, foundUser }) {
  return (
    <>
      <div className="flex flex-row  justify-between items-start gap-4 pb-2 ">
        <div className="flex flex-col">
          <p className="font-bold text-md ">{postState?.posts?.length}</p>
          <p className="leading-1">Posts</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-md">{foundUser?.followers?.length}</p>
          <p className="">Followers</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-md">{foundUser?.following?.length}</p>
          <p className="">Following</p>
        </div>
      </div>
    </>
  );
}
