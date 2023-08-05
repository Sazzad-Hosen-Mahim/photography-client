import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div className="navBar">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <Link>
            <div className="d-flex ">
              <div className="text-4xl inline-block align-middle mt-3 ms-4">
                <FaCameraRetro className="text-emerald-400"></FaCameraRetro>
              </div>

              <a className="btn btn-ghost normal-case text-xl text-left text-purple-400 mb-2">
                Luxury<br></br>Photography
              </a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg nav-button">
            <li>
              <Link to="/service">
                <a>SERVICES</a>
              </Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>

            <li>
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link to="/login">
            <a className="btn bg-indigo-400 text-black hover:text-white me-4">
              Login
            </a>
          </Link>
          <Link to="/signup">
            <a className="btn bg-emerald-400 text-black hover:text-white me-4">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
