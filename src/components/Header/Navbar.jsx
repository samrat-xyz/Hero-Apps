import React from "react";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { IoLogoGithub } from "react-icons/io";

function Navbar() {
  return (
    <nav className="bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/apps'>Apps</NavLink>
              </li>
              <li>
                <NavLink to='/installation'>Installation</NavLink>
              </li>
            </ul>
          </div>

          <NavLink to="/">
            <div className="flex items-center gap-2">
              <div>
                <img src={logoImg} alt="" className="w-8 md:w-10" />
              </div>
              <p className="text-xl md:text-2xl font-bold">HERO.IO</p>
              <div></div>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-6 font-medium">
            <li>
              <NavLink
              to="/"
                className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to='/apps'
              className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
              >Apps</NavLink>
            </li>
            <li>
              <NavLink
              to='/installation'
              className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
              >Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link
            to="https://github.com/samrat-xyz"
            className="btn text-xl font-semibold py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-3 rounded-lg"
          >
            <IoLogoGithub />
            Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
