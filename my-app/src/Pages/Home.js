import { Navbar, PostList, RightSideNav, LeftSideNav } from "../Components";

export function Home() {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white">
          <LeftSideNav />
        </aside>
        <PostList />
        <aside className="bg-white">
          <RightSideNav />
        </aside>
      </div>
    </>
  );
}
