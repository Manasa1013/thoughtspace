import { Navbar, RightSideNav, LeftSideNav, PostDetails } from "../Components";

export function SinglePostPage() {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white">
          <LeftSideNav />
        </aside>
        <main className="main">
          <PostDetails />
        </main>
        <aside className="bg-white">
          <RightSideNav />
        </aside>
      </div>
    </>
  );
}
