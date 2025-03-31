import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Img1 from "../assets/Profile.png";
import { matchPath } from "react-router-dom";
// import FilterSortButtons from "./common/FilterSortButtons";

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
      className={`py-2 flex justify-between items-center px-2 bg-[#FFFFFF] w-full min-h-[7.25rem] border-b border-gray-200 ${
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
            <h1 className="text-[#141522] font-semibold text-2xl tracking-[-0.03em] -top-5 relative">
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
                className="w-[30rem] h-[3.25rem] top-[6.75rem] left-[2rem] rounded-[0.625rem] border-[1px] border-[#F5F5F7] p-[0.875rem_1.75rem] gap-[14.5rem]"
              />
              <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </>
        ) : isTask ? (
          <>
            <h1 className="text-[#141522] font-[Plus Jakarta Sans] font-semibold text-[1.5rem] leading-[150%] tracking-[-0.03em] align-middle">
              Explore Task
            </h1>
            <div className="relative my-4">
              <input
                type="text"
                placeholder="Search Task"
                className="w-[30rem] h-[3.25rem] top-[6.75rem] left-[2rem] rounded-[0.625rem] border-[1px] border-[#F5F5F7] p-[0.875rem_1.75rem] gap-[14.5rem]"
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
                className="w-[30rem] h-[3.25rem] top-[6.75rem] left-[2rem] rounded-[0.625rem] border-[1px] border-[#F5F5F7] p-[0.875rem_1.75rem] gap-[14.5rem]"
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
      <div className="flex items-center gap-6 ml-auto -top-2 relative ">
        <CiShoppingCart className="w-8 h-8 text-gray-700 cursor-pointer" />
        <img src={Img1} alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
