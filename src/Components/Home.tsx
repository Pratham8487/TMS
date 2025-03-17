import Img1 from '../assets/Cases.png';
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
   return (
        <>
            <div className='grid grid-cols-3'>
                <div className="w-[12.125rem] h-[13.375rem] mt-[2rem] ml-[2rem] rounded-[0.625rem] bg-[#141522] flex flex-col justify-evenly py-2 px-3">
                    <h1 className="text-white text-xl">Running Task</h1>
                    <p className="text-white text-xl">65</p>
                    <div className="flex items-center gap-10">
                        <img src={Img1} alt='img1' className='w-14 h-14'/>
                        <h1 className='text-white'>100<br/>Task</h1>
                    </div>
                </div>
                <div className="w-[28.875rem] h-[13.375rem] top-[9.25rem] left-[31.875rem] rounded-[0.625rem] bg-[#F5F5F7] mt-[2rem] ml-[2rem] border flex flex-col py-2 px-4">
                    <div className='flex justify-between'>
                        <h1 className=" top-[1rem] left-[1.25rem] gap-[8.1rem] w-[3.75rem] h-[1.5rem] font-['Plus_Jakarta_Sans'] font-semibold text-[1rem] leading-[1.5] tracking-[-0.02em]">Activity</h1>
                        <div className='flex items-center gap-1'>
                            <p className="w-[3.75rem] h-[1.5rem] text-[#141522] font-['Plus_Jakarta_Sans'] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em] text-center flex items-center justify-center">
                                This Week
                            </p>
                            <FaChevronDown  className='hover:cursor-pointer'/>
                        </div>
                    </div>
                    <div className=" w-[26.375rem] h-[8.8rem] mt-[1.3rem] left-[1.25rem] rounded-[0.625rem] bg-white">
                    
                    </div>
                </div>
            </div>
        </>
    )
}
