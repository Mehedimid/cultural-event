import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Navbar(props) {
  const { user, logOut } = useContext(AuthContext);

  const hadleLogout = () => {
    logOut()
      .then(() => console.log("logged out"))
      .catch((error) => console.error(error.message));
  };

  const navlinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/offer">Offer</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </>
  );
  return (
    <>
      <div className="py-4">
        <div className="navbar sizing ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navlinks}
              </ul>
            </div>
            <h1 className=" text-xl md:text-3xl font-bold ">
              <span className="text-orange-600 ">ACE</span> Management
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center text-base gap-7 font-medium px-1">
              {navlinks}
            </ul>
          </div>
          <div className="navbar-end">
            {user && (
              <h2 className="text-base text-orange-600 bg-black bg-opacity-10 p-2 rounded font-semibold">
                {user.email}
              </h2>
            )}
            {user ? (
              <button className="btn btn-neutral" onClick={hadleLogout}>
                Log Out
              </button>
            ) : (
              <NavLink to="/login">
                <button className="btn btn-accent">Log In</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
