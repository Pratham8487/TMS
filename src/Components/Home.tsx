// import Img1 from '../assets/Cases.png';
// import { FaChevronDown } from "react-icons/fa";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import Img2 from 'C:/Users/Pratham/Pictures/p1.png';
// import { useState } from 'react';

// interface Mentor {
//     id: number;
//     name: string;
//     role: string;
//     tasks: number;
//     rating: number;
//     reviews: number;
//     image: string;
//     followed: boolean;
// }

// const mentors: Mentor[] = [
//     {
//         id: 1,
//         name: "Curious George",
//         role: "UI UX Design",
//         tasks: 40,
//         rating: 4.7,
//         reviews: 750,
//         image: Img2,
//         followed: false,
//     },
//     {
//         id: 2,
//         name: "Abraham Lincoln",
//         role: "3D Design",
//         tasks: 32,
//         rating: 4.9,
//         reviews: 510,
//         image: Img2,
//         followed: false,
//     },
// ];

// const MentorCard: React.FC<Mentor> = ({ name, role, tasks, rating, reviews, image, followed }) => {
//     return (
//         <div className="bg-white p-4 rounded-xl shadow-md w-72 h-40 m-2 flex flex-col justify-between">
//             <div className="flex items-center gap-3">
//                 <img src={image} alt={name} className="w-10 h-10 rounded-full" />
//                 <div>
//                     <h3 className="font-semibold">{name}</h3>
//                     <p className="text-gray-500 text-sm">{role}</p>
//                 </div>
//                 <span className="text-blue-500 text-sm ml-auto">{followed ? "Followed" : "+ Follow"}</span>
//             </div>
//             <div className="flex justify-between text-sm text-gray-600">
//                 <span>📜 {tasks} Task</span>
//                 <span>⭐ {rating} ({reviews} Reviews)</span>
//             </div>
//         </div>
//     );
// };

// const MentorList: React.FC = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % mentors.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + mentors.length) % mentors.length);
//     };

//     return (
//         <div className="relative flex flex-col items-center">
//             {/* Mentor Cards - Show all on large screens, but only one on mobile */}
//             <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
//                 {mentors.map((mentor, index) => (
//                     <div key={mentor.id} className={`${index === currentIndex ? "block" : "hidden"} sm:block`}>
//                         <MentorCard {...mentor} />
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Arrows (Only Visible on Mobile) */}
//             <div className='flex items-center gap-2'>
//                 <FaChevronLeft onClick={handlePrev} className="cursor-pointer" />
//                 <FaChevronRight onClick={handleNext} className="cursor-pointer" />
//             </div>

//         </div>
//     );
// };

// export default function Home() {
//     const data = [
//         { name: "S", value: 1 },
//         { name: "M", value: 2 },
//         { name: "T", value: 3 },
//         { name: "W", value: null },
//         { name: "T", value: null },
//         { name: "F", value: null },
//         { name: "S", value: null },
//     ];
    
//     return (
//         <>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
//                 <div className="w-full max-w-xs lg:max-w-sm h-[13.375rem] mt-[2rem] rounded-[0.625rem] bg-[#141522] flex flex-col justify-evenly py-2 px-3">
//                     <h1 className="text-white text-xl">Running Task</h1>
//                     <p className="text-white text-xl">65</p>
//                     <div className="flex items-center gap-10">
//                         <img src={Img1} alt='img1' className='w-14 h-14'/>
//                         <h1 className='text-white'>100<br/>Task</h1>
//                     </div>
//                 </div>
//                 <div className="flex w-full lg:col-span-2">
//                     <div className="w-full max-w-[32rem] h-auto rounded-[0.625rem] bg-gray-200 mt-[2rem] px-4 py-2 mx-auto">
//                         <div className="flex justify-between">
//                             <h1 className="text-lg font-semibold">Activity</h1>
//                             <div className="flex items-center gap-1">
//                                 <p className="text-sm font-medium">This Week</p>
//                                 <FaChevronDown className="hover:cursor-pointer" />
//                             </div>
//                         </div>
//                         <div className="w-full h-auto mt-[1.3rem] rounded-[0.625rem] bg-white">
//                             <ResponsiveContainer width="100%" height={200}>
//                                 <LineChart data={data}>
//                                     <XAxis dataKey="name" />
//                                     <YAxis />
//                                     <CartesianGrid strokeDasharray="3 3" />
//                                     <Tooltip />
//                                     <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
//                                 </LineChart>
//                             </ResponsiveContainer>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full col-span-1 md:col-span-2 lg:col-span-3 p-4 rounded-[0.625rem]">
//                     <div className="flex justify-between items-center">
//                         <h1 className="text-2xl font-semibold">Monthly Mentors</h1>
//                         <div className='items-center gap-2 sm:flex hidden'>
//                             <FaChevronLeft />
//                             <FaChevronRight />
//                         </div>
//                     </div>
//                     <div className="mt-4">
//                         <MentorList />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import Img1 from '../assets/Cases.png';
import { FaChevronDown } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Img2 from 'C:/Users/Pratham/Pictures/p1.png';

interface Mentor {
    id: number;
    name: string;
    role: string;
    tasks: number;
    rating: number;
    reviews: number;
    image: string;
    followed: boolean;
}

const mentors: Mentor[] = [
    {
        id: 1,
        name: "Curious George",
        role: "UI UX Design",
        tasks: 40,
        rating: 4.7,
        reviews: 750,
        image: Img2,
        followed: false,
    },
    {
        id: 2,
        name: "Abraham Lincoln",
        role: "3D Design",
        tasks: 32,
        rating: 4.9,
        reviews: 510,
        image: Img2,
        followed: false,
    },
];
const MentorCard: React.FC<Mentor> = ({ name, role, tasks, rating, reviews, image, followed }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md w-80 h-40 m-2 flex flex-col justify-between">
            <div className="flex items-center gap-3">
                <img src={image} alt={name} className="w-10 h-10 rounded-full" />
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-gray-500 text-sm">{role}</p>
                </div>
                <span className="text-blue-500 text-sm ml-auto">{followed ? "Followed" : "+ Follow"}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
                <span>📜 {tasks} Task</span>
                <span>⭐ {rating} ({reviews} Reviews)</span>
            </div>
        </div>
    );
};

const MentorList: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-6 justify-center lg:justify-evenly">
            {mentors.map((mentor) => (
                <MentorCard key={mentor.id} {...mentor} />
            ))}
        </div>
    );
};

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
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 w-[63%]'>
                <div className=" w-full max-w-xs lg:max-w-sm h-[13.375rem] mt-[2rem] rounded-[0.625rem] bg-[#141522] flex flex-col justify-evenly py-2 px-3">
                    <h1 className="text-white text-xl">Running Task</h1>
                    <p className="text-white text-xl">65</p>
                    <div className="flex items-center gap-10">
                        <img src={Img1} alt='img1' className='w-14 h-14'/>
                        <h1 className='text-white'>100<br/>Task</h1>
                    </div>
                </div>
                <div className="flex w-full lg:col-span-2">
                    <div className="w-full max-w-[32rem] h-auto rounded-[0.625rem] bg-gray-200 mt-[2rem] px-4 py-2 mx-auto">
                        <div className="flex justify-between">
                            <h1 className="text-lg font-semibold">Activity</h1>
                            <div className="flex items-center gap-1">
                                <p className="text-sm font-medium">This Week</p>
                                <FaChevronDown className="hover:cursor-pointer" />
                            </div>
                        </div>
                        <div className="w-full h-auto mt-[1.3rem] rounded-[0.625rem] bg-white">
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
                <div className="w-full mx-auto col-span-1 md:col-span-2 lg:col-span-3 p-4 rounded-[0.625rem]">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">Monthly Mentors</h1>
                        <div className='flex items-center gap-2'>
                            <FaChevronLeft />
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className="mt-4">
                        <MentorList />
                    </div>
                </div>
            </div>
        </>
    );
}
