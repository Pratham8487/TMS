import img1 from '../assets/book-square.png';
import img2 from '../assets/Question.png';
import { GrOverview  } from "react-icons/gr";
import { IoMdBook } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuMessageSquareText } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <>
        <div className="w-[15.75rem] h-[47rem] bg-white border">
            <div className="w-[11.75rem] h-[2.5rem] mt-[2rem] gap-3 ml-[2rem] flex items-center">
                <img src={img1} alt="img1" className="w-[2.5rem] h-[2.5rem]"/>  
                <h1 className="w-[8.5rem] h-[2.5rem] font-[Plus Jakarta Sans] font-semibold text-[2rem] leading-[1.5] tracking-[-0.03em] align-middle text-[#141522]"
                >DNX</h1>
            </div>
            <div className="w-[11.75rem] h-[19.75rem] mt-[6.25rem] ml-[2rem] gap-[1.5rem] bg-white">
                <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500  rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:font-medium  hover:cursor-pointer">
                    <GrOverview />
                    <p>Overview</p>
                </div>
                <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500  rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:font-medium  hover:cursor-pointer">
                    <IoMdBook />
                    <p>Task</p>
                </div>
                <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500  rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:font-medium  hover:cursor-pointer">
                    <CgProfile />
                    <p>Mentors</p>
                </div>
                <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500  rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:font-medium  hover:cursor-pointer">
                    <LuMessageSquareText />
                    <p>Message</p>
                </div>
                <div className="my-2 w-[11.75rem] h-[2.75rem] font-medium hover:bg-[#F5F5F7] hover:text-black text-gray-500  rounded-[0.625rem] gap-[0.625rem] px-[1.25rem] py-[0.625rem] flex items-center hover:font-medium  hover:cursor-pointer">
                    <CiSettings />
                    <p>Settings</p>
                </div>
            </div>
            <div className="w-[11.75rem] h-[15.5rem] top-[46.5rem] ml-[2rem] rounded-[0.625rem] bg-[#141522]">
                <img src={img2} alt="img1" className="absolute w-[3rem] h-[3.25rem] top-[29rem] left-[6.375rem] rounded-full border-4 border-white"/>
                <h1 className="relative w-[6.5rem] h-[1.25rem] top-[4.4375rem] left-[2.625rem] font-[Plus Jakarta Sans] font-semibold text-[1rem] leading-[1.5] tracking-[-0.02em] text-center align-middle text-white"
                >Help Center</h1>
                <p className="relative w-[9.5rem] h-[2.75rem] top-[5.1rem] left-[1.125rem] text-white font-[Plus Jakarta Sans] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em] text-center flex items-center justify-center">Having Trouble in Learning.
                    Please contact us for more questions.
                </p>
                <button className="relative w-[9.75rem] h-[2.5rem] top-[8rem] left-[1rem] rounded-[0.625rem] bg-white font-medium hover:cursor-pointer">Go To Help Center</button>
            </div>
        </div>
    </>
  )
}

export default Sidebar