import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 shadow flex justify-between items-center py-6 px-4 m-0 bg-teal-600/100 text-white text-lg md:font-medium font-semibold">
      <header className="inline">
        <NavLink to="/" className="logo">
          Share thoughts
        </NavLink>
      </header>
      <ul className="flex"></ul>
      <NavLink to="/users">
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
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </nav>
  );
};
