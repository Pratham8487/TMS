import { CiShoppingCart } from "react-icons/ci";
import Img1 from  '../assets/Profile.png';

const Header = () => {
    return (
        <>
            <div className="py-4 flex justify-evenly bg-white">
                <div className="w-[14.75rem] h-[4.5rem] mt-[2rem] ml-[2rem] gap-2 hidden sm:block">
                    <h1 className="text-[#141522] font-[600] text-[24px] leading-[150%] tracking-[-0.03em] align-middle">
                    Hi, Dennis Nzioki
                    </h1>
                    <p className="w-[14.75rem] h-[1.75rem] text-[#54577A] font-[500] text-[1rem] leading-[1.5] tracking-[-0.02em]">Let's finish your task today!</p>
                </div>
                <div className="w-[8rem] h-[3.25rem] mt-7 ml-[52.75rem] gap-[1.5rem] flex">
                    <CiShoppingCart className="w-[3.25rem] h-[3.25rem] text-gray-700 cursor-pointer rounded-full"/>
                    <img src={Img1} alt="img1" className="w-[3.25rem] h-[3.25rem] rounded-full"/>
                </div>    
            </div>    
        </>
    )
}

export default Header