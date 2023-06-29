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
      <NavLink>Navlink</NavLink>
    </nav>
  );
};
