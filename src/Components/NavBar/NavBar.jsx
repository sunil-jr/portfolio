import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavBar = ({ darkModeHandler }) => {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    darkModeHandler(!isDarkMode);
    setDarkMode(!isDarkMode);
  };
  const [open, setOpen] = useState(false);
  function removeActiveProfile() {
    const allElements = document.querySelectorAll(".activeNav");
    allElements.forEach((element) => {
      element.classList.remove("activeNav");
    });
  }
  const handleActiveProfile = (event) => {
    const clickedElement = event.target;
    const allElements = document.querySelectorAll(".activeNav");
    allElements.forEach((element) => {
      element.classList.remove("activeNav");
    });
    clickedElement.parentNode.classList.add("activeNav");
  };
  return (
    <nav>
      <div className="navBar flex justify-between items-center  p-[3rem] max-md:p-[1rem]">
        <div className="logoDiv" onClick={removeActiveProfile}>
          <Link to="/">
            <h1 className="logo text-[25px] text-blueColor ">
              <strong>Sunil</strong>Subedi
            </h1>
          </Link>
        </div>
        <div className="outLineBar ml-auto text-[25px] hidden  max-md:block">
          <div className="div flex ">
            <DarkModeSwitch
              className="m-2"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            {!open ? (
              <AiOutlineBars
                onClick={() => setOpen(!open)}
                className="m-2 hover:fill-blueColor dark:fill-white"
              />
            ) : (
              <div className="cross" onClick={() => setOpen(!open)}>
                <ImCross className="text-[23px] dark:fill-white fill-gray-700 m-2 hover:fill-blueColor" />
              </div>
            )}
          </div>
        </div>
        <div className="menu flex gap-8 max-md:hidden ">
          <li
            onClick={handleActiveProfile}
            className="menuList text-[#6f6f6] dark:text-white hover:text-blueColor "
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={handleActiveProfile}
            className="menuList text-[#6f6f6] dark:text-white hover:text-blueColor"
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={handleActiveProfile}
            className="menuList text-[#6f6f6] dark:text-white hover:text-blueColor"
          >
            <Link to="/work">Work</Link>
          </li>
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
        </div>
      </div>
      <div
        className={`menu ${
          open ? "block" : "hidden"
        } dark:bg-slate-900 lg:hidden z-50 h-fit p-[2rem] fixed  right-0  bg  w-full bg-white rounded-xl`}
      >
        <div className="list flex flex-col">
          <div className="menu text-[24px] flex flex-col  text-center items-center">
            <Link to="/">
              <div
                onClick={() => setOpen(!open)}
                className="hover:text-white w-screen m-3 hover:bg-blue-400  "
              >
                <a className="cursor-pointer text-[#6f6f6] dark:text-white">
                  Home
                </a>
              </div>
            </Link>
            <Link to="/about">
              <div
                onClick={() => setOpen(!open)}
                className="hover:text-white w-screen m-3 hover:bg-blue-400  "
              >
                <a className="  cursor-pointer text-[#6f6f6] dark:text-white">
                  About
                </a>
              </div>
            </Link>
            <Link to="/work">
              <div
                onClick={() => setOpen(!open)}
                className="hover:text-white w-screen m-3 hover:bg-blue-400  "
              >
                <a className=" cursor-pointer text-[#6f6f6] dark:text-white">
                  Work
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
