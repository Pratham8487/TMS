import Img1 from '../assets/Cases.png';
import { FaChevronDown } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import MentorList from "../Components/MentorList";

export default function Home() {
    const data = [
        { name: "S", value: 3 },
        { name: "M", value: 2 },
        { name: "T", value: 4 },
        { name: "W", value: 5 },
        { name: "T", value: 3 },
        { name: "F", value: 4 },
        { name: "S", value: 6 },
    ];
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 w-full sm:w-[63%]'>
            <div className="w-full max-w-xs lg:max-w-sm min-h-[16.5rem] sm:h-[13.375rem] mt-4 sm:mt-[2rem] rounded-[0.625rem] bg-[#141522] flex flex-col justify-evenly py-4 px-5">
                <h1 className="text-white text-lg sm:text-xl">Running Task</h1>
                <p className="text-white text-lg sm:text-xl">65</p>
                <div className="flex items-center gap-6 sm:gap-10">
                    <img src={Img1} alt='img1' className='w-16 h-16 sm:w-14 sm:h-14'/>
                    <h1 className='text-white text-base sm:text-sm'>100<br/>Task</h1>
                </div>
            </div>
            <div className="flex w-full lg:col-span-2">
                <div className="w-full max-w-[32rem] h-auto rounded-[0.625rem] bg-gray-200 mt-4 sm:mt-[2rem] px-4 py-2 mx-auto">
                    <div className="flex justify-between">
                        <h1 className="text-base sm:text-lg font-semibold">Activity</h1>
                        <div className="flex items-center gap-1">
                            <p className="text-xs sm:text-sm font-medium">This Week</p>
                            <FaChevronDown className="hover:cursor-pointer" />
                        </div>
                    </div>
                    <div className="w-full h-auto mt-3 sm:mt-[1.3rem] rounded-[0.625rem] bg-white">
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#141522" strokeWidth={2} dot={{ r: 5 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto col-span-1 md:col-span-2 lg:col-span-3 p-4 rounded-[0.625rem] mt-4">
                {/* <div className="mt-4"> */}
                    <MentorList />
                {/* </div> */}
            </div>
            <div className="w-[43rem] h-[12.25rem] top-[24.625rem] left-[17.75rem] gap-[1.25rem]">
                
            </div>
        </div>
    );
}

// import Img1 from '../assets/Cases.png';
// import { FaChevronDown } from "react-icons/fa";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
// import CustomToolTip from "../Components/CustomToolTip";
// import MentorList from "../Components/MentorList";

// export default function Home() {
//     const data = [
//         { name: "S", value: 3 },
//         { name: "M", value: 2 },
//         { name: "T", value: 4 },
//         { name: "W", value: 5 },
//         { name: "T", value: 3 },
//         { name: "F", value: 4 },
//         { name: "S", value: 6 },
//     ];

//     return (
//         <div className="max-w-screen-lg mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="w-full max-w-xs lg:max-w-sm h-auto sm:h-[13.375rem] mt-4 sm:mt-[2rem] rounded-[0.625rem] bg-[#141522] flex flex-col justify-evenly py-4 px-5">
//                 <h1 className="text-white text-lg sm:text-xl">Running Task</h1>
//                 <p className="text-white text-lg sm:text-xl">65</p>
//                 <div className="flex items-center gap-6 sm:gap-10">
//                     <img src={Img1} alt='img1' className='w-16 h-16 sm:w-14 sm:h-14'/>
//                     <h1 className='text-white text-base sm:text-sm'>100<br/>Task</h1>
//                 </div>
//             </div>
//             {/* Activity Chart */}
//             <div className="lg:col-span-2 bg-gray-200 p-4 rounded-md">
//                 <div className="flex justify-between items-center">
//                     <h1 className="text-lg font-semibold">Activity</h1>
//                     <div className="flex items-center gap-1">
//                         <p className="text-sm font-medium">This Week</p>
//                         <FaChevronDown className="hover:cursor-pointer" />
//                     </div>
//                 </div>
//                 <ResponsiveContainer width="100%" height={200}>
//                     <LineChart data={data}>
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <Tooltip />
//                         <Line type="monotone" dataKey="value" stroke="#141522" strokeWidth={2} dot={{ r: 5 }} />
//                     </LineChart>
//                 </ResponsiveContainer>
//                 {/* <CustomToolTip /> */}
//             </div>

//             {/* Mentor List */}
//             <div className="lg:col-span-3">
//                 <MentorList />
//             </div>
//         </div>
//     );
// }
