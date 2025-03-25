import { Link, useLocation } from "react-router-dom";
import img1 from "../assets/book-square.png";
import { GrOverview } from "react-icons/gr";
import { IoMdBook } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuMessageSquareText } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Menu Icon for Mobile View */}
      {!isOpen && (
        <div className="block md:hidden p-4 absolute top-4 left-4 z-50">
          <IoReorderThreeOutline
            className="w-10 h-10 cursor-pointer text-gray-700"
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}
      <div
        className={`w-[15.75rem] min-h-screen fixed bg-white top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0 md:block z-40 sm:overflow-visible sm:max-h-full`}
      >
        <div className="w-[11.75rem] h-[2.5rem] pt-[4.5rem] gap-3 pl-[2rem] flex items-center">
          <img src={img1} alt="logo" className="w-[2.5rem] h-[2.5rem]" />
          <h1 className="font-semibold text-2xl text-[#141522]">DNX</h1>
        </div>

        <div className="w-[11.75rem] h-[19.75rem] pt-[4rem] pl-[2rem] gap-[1.5rem] bg-white">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`my-2 flex items-center gap-2 w-[11.75rem] h-[2.75rem] px-4 py-2 font-[Plus Jakarta Sans] font-semibold text-[0.875rem] leading-[150%] tracking-[-0.02em] align-middle ${
              location.pathname === "/"
                ? "text-[#141522] bg-[#F5F5F7]"
                : "text-[#8E92BC] bg-[#FFFFFF]"
            } rounded-lg`}
          >
            <GrOverview />
            <p>Overview</p>
          </Link>

          <Link
            to="/tasks"
            onClick={() => setIsOpen(false)}
            className={`my-2 flex items-center gap-2 w-[11.75rem] h-[2.75rem] px-4 py-2 font-[Plus Jakarta Sans] font-semibold text-[0.875rem] leading-[150%] tracking-[-0.02em] align-middle ${
              location.pathname === "/tasks"
                ? "text-[#141522] bg-[#F5F5F7]"
                : "text-[#8E92BC] bg-[#FFFFFF]"
            } rounded-lg`}
          >
            <IoMdBook />
            <p>Task</p>
          </Link>

          {/* Mentors Route */}
          <Link
            to="/mentors"
            onClick={() => setIsOpen(false)}
            className={`my-2 flex items-center gap-2 w-[11.75rem] h-[2.75rem] px-4 py-2 font-[Plus Jakarta Sans] font-semibold text-[0.875rem] leading-[150%] tracking-[-0.02em] align-middle ${
              location.pathname === "/mentors"
                ? "text-[#141522] bg-[#F5F5F7]"
                : "text-[#8E92BC] bg-[#FFFFFF]"
            } rounded-lg`}
          >
            <CgProfile />
            <p>Mentors</p>
          </Link>

          <Link
            to="/messages"
            onClick={() => setIsOpen(false)}
            className={`my-2 flex items-center gap-2 w-[11.75rem] h-[2.75rem] px-4 py-2 font-[Plus Jakarta Sans] font-semibold text-[0.875rem] leading-[150%] tracking-[-0.02em] align-middle ${
              location.pathname === "/messages"
                ? "text-[#141522] bg-[#F5F5F7]"
                : "text-[#8E92BC] bg-[#FFFFFF]"
            } rounded-lg`}
          >
            <LuMessageSquareText />
            <p>Message</p>
          </Link>

          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={`my-2 flex items-center gap-2 w-[11.75rem] h-[2.75rem] px-4 py-2 font-[Plus Jakarta Sans] font-semibold text-[0.875rem] leading-[150%] tracking-[-0.02em] align-middle ${
              location.pathname === "/settings"
                ? "text-[#141522] bg-[#F5F5F7]"
                : "text-[#8E92BC] bg-[#FFFFFF]"
            } rounded-lg`}
          >
            <CiSettings />
            <p>Settings</p>
          </Link>
        </div>
        <div className="w-[11.75rem] h-[15.5rem] ml-[2rem] rounded-[0.625rem] bg-[#141522] mt-20 relative md:relative lg:fixed lg:bottom-5 left-0">
          <div className="absolute w-[3rem] h-[3.25rem] left-[4.2rem] -top-6 rounded-full border-4 border-white bg-[#141522] backdrop-blur-[24px] grid place-items-center">
            <span className="w-[2.125rem] h-[2.125rem] text-white font-[700] text-[1.75rem] leading-[1.2] tracking-[0.01em] text-center align-middle">
              ?
            </span>
          </div>
          <h1 className="relative w-[6.5rem] h-[1.25rem] top-[4.4375rem] left-[2.625rem] font-[Plus Jakarta Sans] font-semibold text-[1rem] leading-[1.5] tracking-[-0.02em] text-center align-middle text-white">
            Help Center
          </h1>
          <p className="relative w-[9.5rem] h-[2.75rem] top-[5.1rem] left-[1.125rem] text-white font-[Plus Jakarta Sans] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em] text-center flex items-center justify-center">
            Having Trouble in Learning? Please contact us for more questions.
          </p>
          <button className="relative w-[9.75rem] h-[2.5rem] top-[8rem] left-[1rem] rounded-[0.625rem] bg-white font-medium hover:cursor-pointer">
            Go To Help Center
          </button>
        </div>
      </div>

      {/* Overlay for closing menu when clicked outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
