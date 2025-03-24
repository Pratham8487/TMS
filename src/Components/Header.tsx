import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Img1 from "../assets/Profile.png";
import { matchPath } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMentors = location.pathname === "/mentors";
  const isSettings = location.pathname === "/settings";
  const isTask = location.pathname === "/tasks";
  const isHeader = location.pathname === "/messages";
  const isTaskId = matchPath("/tasks/:id", location.pathname);

  return (
    <div
      className={`py-2 flex justify-between items-center px-2 bg-gray-50 w-full min-h-[7.25rem]  ${
        isHomePage ? "w-[63%] max-w-screen-md" : "w-full"
      }`}
    >
      {/* Left Side - Greeting Text (Hidden on Mobile) */}
      <div className="hidden md:block mt-[2rem] ml-[2rem]">
        {isHomePage ? (
          <>
            <h1 className="text-[#141522] font-semibold text-2xl tracking-[-0.03em]">
              Hi, Dennis Nzioki
            </h1>
            <p className="text-[#54577A] font-medium text-base tracking-[-0.02em]">
              Let's finish your task today!
            </p>
          </>
        ) : isHeader ? (
          <>
            <h1 className="text-[#141522] font-semibold text-2xl tracking-[-0.03em]">
              Message
            </h1>
          </>
        ) : isMentors ? (
          <>
            <h1 className="text-[#141522] font-semibold text-2xl tracking-[-0.03em]">
              Explore Mentors
            </h1>
            <div className="relative my-4">
              <input
                type="text"
                placeholder="Search Mentors"
                className="w-96 p-2 pl-6 pr-12 text-gray-700 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </>
        ) : isTask ? (
          <>
            <h1 className="text-[#141522] font-semibold text-2xl tracking-[-0.03em]">
              Explore Task
            </h1>
            <div className="relative my-4">
              <input
                type="text"
                placeholder="Search Task"
                className="w-96 p-2 pl-6 pr-12 text-gray-700 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </>
        ) : isTaskId ? (
          <>
            <h1 className="text-[#141522] font-semibold text-2xl tracking-[-0.03em]">
              Detail Task
            </h1>
            <div className="relative my-4">
              <input
                type="text"
                placeholder="Search Task"
                className="w-96 p-2 pl-6 pr-12 text-gray-700 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </>
        ) : isSettings ? (
          <>
            <h1 className="text-[#141522] font-semibold text-2xl tracking-[-0.03em]">
              Settings
            </h1>
            <p className="text-[#54577A] font-medium text-base tracking-[-0.02em]"></p>
          </>
        ) : null}
      </div>
      <div className="flex items-center gap-6 ml-auto">
        <CiShoppingCart className="w-8 h-8 text-gray-700 cursor-pointer" />
        <img src={Img1} alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
