import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src="/logo.png" alt="logo" className="w-10 h-10 object-contain" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-yellow-40 ${isActive ? "text-yellow-40" : "text-white"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `hover:text-yellow-40 ${isActive ? "text-yellow-40" : "text-white"}`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
