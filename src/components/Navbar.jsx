import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-20 py-12 flex justify-between items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        {/* <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink> */}
      </div>
      <button className="px-3 py-1 text-white bg-red-700 rounded-sm">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
