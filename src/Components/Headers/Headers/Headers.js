import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="relative bg-white shadow  text-black">
        <div className="container px-6 py-4  mx-auto md:flex md:justify-between ">
          <div className="flex  justify-between">
            <div>
              <Link
                className="text-4xl  font-black text-yellow-400  transition-colors duration-300 transform lg:text-start "
                to="#"
              >
                Brand
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={
              isOpen
                ? ` left-0  absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative  md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`
                : ` left-[-400px] lg:left-0 absolute lg:static inset-x-0 z-20 w-full  px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`
            }
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink
              onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  isActive
                    ? "my-2 p-3 border-2 border-yellow-500 text-yellow-500 font-semibold transition-colors duration-300 transform  hover:text-yellow-500 rounded-md md:mx-4 md:my-0"
                    : "my-2 text-black hover:border-yellow-500 hover:rounded-md font-semibold border-2 p-3 transition-colors duration-300 transform  hover:text-yellow-500  md:mx-4 md:my-0"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
              onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  isActive
                    ? "my-2 p-3 border-2 border-yellow-500 text-yellow-500 font-semibold transition-colors duration-300 transform  hover:text-yellow-500 rounded-md md:mx-4 md:my-0"
                    : "my-2 text-black hover:border-yellow-500 hover:rounded-md font-semibold border-2 p-3 transition-colors duration-300 transform  hover:text-yellow-500  md:mx-4 md:my-0"
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
              onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                  isActive
                    ? "my-2 p-3 border-2 border-yellow-500 text-yellow-500 font-semibold transition-colors duration-300 transform  hover:text-yellow-500 rounded-md md:mx-4 md:my-0"
                    : "my-2 text-black hover:border-yellow-500 hover:rounded-md font-semibold border-2 p-3 transition-colors duration-300 transform  hover:text-yellow-500  md:mx-4 md:my-0"
                }
                to="/register"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers;