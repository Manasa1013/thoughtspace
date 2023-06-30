import { useAuth } from "../../Contexts/AuthContext";

export function UserProfile() {
  const { auth, setAuth, logoutHandler } = useAuth();
  console.log({ auth });
  return (
    <>
      <div className="bg-white mr-16 p-2 mt-2">
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