import { useParams } from "react-router";
import { UserProfile, Navbar, LeftSideNav } from "../Components";

export function Profile() {
  const { username } = useParams();

  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="bg-white aside-left">
          <LeftSideNav />
        </aside>
        <main className="main">
          <UserProfile username={username} />
        </main>
      </div>
    </>
  );
}
