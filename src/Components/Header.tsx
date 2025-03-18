import { CiShoppingCart } from "react-icons/ci";
import Img1 from "../assets/Profile.png";

const Header = () => {
  return (
    <div className="py-4 flex justify-between items-center px-4 bg-white w-full md:w-[63%] max-w-screen-md">
      {/* Left Side - Greeting Text (Hidden on Mobile) */}
      <div className="hidden md:block mt-[2rem] ml-[2rem]">
        <h1 className="text-[#141522] font-semibold text-2xl tracking-[-0.03em]">
          Hi, Dennis Nzioki
        </h1>
        <p className="text-[#54577A] font-medium text-base tracking-[-0.02em]">
          Let's finish your task today!
        </p>
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center gap-6 ml-auto">
        <CiShoppingCart className="w-8 h-8 text-gray-700 cursor-pointer" />
        <img src={Img1} alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
