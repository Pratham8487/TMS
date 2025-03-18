import img1 from "../assets/book-square.png";
import { GrOverview } from "react-icons/gr";
import { IoMdBook } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuMessageSquareText } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Icon for Mobile View */}
      <div className="block md:hidden p-4 fixed top-4 left-4 z-50">
        <HiOutlineMenuAlt3
          className="w-10 h-10 cursor-pointer text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`w-[15.75rem] h-screen fixed bg-white  top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0 md:block z-40`}
      >
        <div className="w-[11.75rem] h-[2.5rem] mt-[2rem] gap-3 ml-[2rem] flex items-center">
          <img src={img1} alt="img1" className="w-[2.5rem] h-[2.5rem]" />
          <h1 className="w-[8.5rem] h-[2.5rem] font-[Plus Jakarta Sans] font-semibold text-[2rem] leading-[1.5] tracking-[-0.03em] align-middle text-[#141522]">
            DNX
          </h1>
        </div>

        <div className="w-[11.75rem] h-[19.75rem] mt-[6.25rem] ml-[2rem] gap-[1.5rem] bg-white">
          <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500 rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:cursor-pointer">
            <GrOverview />
            <p>Overview</p>
          </div>
          <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500 rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:cursor-pointer">
            <IoMdBook />
            <p>Task</p>
          </div>
          <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500 rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:cursor-pointer">
            <CgProfile />
            <p>Mentors</p>
          </div>
          <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500 rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:cursor-pointer">
            <LuMessageSquareText />
            <p>Message</p>
          </div>
          <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500 rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:cursor-pointer">
            <CiSettings />
            <p>Settings</p>
          </div>
        </div>
        <div className="w-[11.75rem] h-[15.5rem] ml-[2rem] rounded-[0.625rem] bg-[#141522] mt-auto">
          <div className="absolute w-[3rem] h-[3.25rem] top-[29rem] left-[6.375rem] rounded-full border-4 border-white bg-[#141522] backdrop-blur-[24px] grid place-items-center">
            <span className="w-[2.125rem] h-[2.125rem] top-[45.3125rem] left-[6.8125rem] text-white font-[700] text-[1.75rem] leading-[1.2] tracking-[0.01em] text-center align-middle">
              ?
            </span>
          </div>
          <h1 className="relative w-[6.5rem] h-[1.25rem] top-[4.4375rem] left-[2.625rem] font-[Plus Jakarta Sans] font-semibold text-[1rem] leading-[1.5] tracking-[-0.02em] text-center align-middle text-white">
            Help Center
          </h1>
          <p className="relative w-[9.5rem] h-[2.75rem] top-[5.1rem] left-[1.125rem] text-white font-[Plus Jakarta Sans] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em] text-center flex items-center justify-center">
            Having Trouble in Learning. Please contact us for more questions.
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
