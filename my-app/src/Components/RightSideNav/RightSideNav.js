import { usePost } from "../../Contexts/PostContext";
import "./RightSideNav.css";
export function RightSideNav() {
  const { state, dispatch } = usePost();
  function getLatestPosts(posts) {
    return posts.sort((a, b) =>
      Date.parse(a.createdAt) < Date.parse(b.createdAt) ? 1 : -1
    );
  }
  function getMostLikedPosts(posts) {
    return posts.sort((a, b) =>
      a.likes.likeCount < b.likes.likeCount ? 1 : -1
    );
  }
  const sortOptionsList = ["Trending", "Latest"];
  return (
    <div className="bg-white p-4 fixed top-0 right-0 mr-10 mt-20 ">
      <h2 className="text-teal-800 font-bold text-lg">Sort By</h2>
      <select
        className="outline-teal-600/50 text-md text-teal-700"
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value === "Latest")
            dispatch({
              type: "SET_POSTS",
              payload: getLatestPosts(state?.posts),
            });
          else if (e.target.value === "Trending") {
            dispatch({
              type: "SET_POSTS",
              payload: getMostLikedPosts(state?.posts),
            });
          }
        }}
      >
        {sortOptionsList.map((sortOption) => (
          <option key={sortOption} value={sortOption}>
            {sortOption}
          </option>
        ))}
      </select>
    </div>
  );
}
