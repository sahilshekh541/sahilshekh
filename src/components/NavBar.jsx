import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={
          "h-10 w-20 shadow-md rounded-lg bg-white flex items-center justify-center font-bold"
        }
      >
        <p className="blue-gradient_text">SAHIL</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "ease duration-300 text-blue-500"
              : "ease duration-300 text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "ease duration-300 text-blue-500"
              : "ease duration-300 text-black"
          }
        >
          Projects
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "ease duration-300 text-blue-500"
              : "ease duration-300 text-black"
          }
        >
          Contact
        </NavLink> */}
      </nav>
    </header>
  );
};

export default NavBar;
