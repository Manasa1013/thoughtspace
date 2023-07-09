import { usePost } from "../../Contexts/PostContext";
import "./RightSideNav.css";
export function RightSideNav({ posts }) {
  const { dispatch } = usePost();

  function getLatestPosts(posts) {
    return posts.sort((a, b) =>
      Date.parse(a.updatedAt) < Date.parse(b.updatedAt) ? 1 : -1
    );
  }
  function getMostLikedPosts(posts) {
    return posts.sort((a, b) =>
      a.likes.likeCount < b.likes.likeCount ? 1 : -1
    );
  }
  const sortOptionsList = ["Trending", "Latest"];
  return (
    <div className="bg-white p-4  md:fixed md:top-0 md:right-0 md:mr-10 md:mt-20 sticky top-20">
      <h2 className="text-teal-800 font-bold text-lg hidden md:block">
        Sort By
      </h2>
      <div className="visible"></div>
      <select
        className="outline-teal-600/50 text-md text-teal-700"
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value === "Latest")
            dispatch({
              type: "SET_POSTS",
              payload: getLatestPosts(posts),
            });
          else if (e.target.value === "Trending") {
            dispatch({
              type: "SET_POSTS",
              payload: getMostLikedPosts(posts),
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
