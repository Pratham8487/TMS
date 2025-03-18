import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const upcomingTasks = [
    {
        id: 1,
        title: "Creating Mobile App Design",
        role: "UI UX Design",
        progress: 75,
        daysLeft: 3,
        image: "Img1",
        team: ["User1", "User2", "User3", "User4", "User5"]
    },
    {
        id: 2,
        title: "Creating Perfect Website",
        role: "Web Developer",
        progress: 85,
        daysLeft: 4,
        image: "Img2",
        team: ["User6", "User7", "User8", "User9", "User10"]
    }
];


export default function UpcomingTaskList() {
    const [index, setIndex] = useState(0);
        const isMobile = window.innerWidth < 640;
        const mentorsPerPage = isMobile ? 1 : 2;
    
        const nextMentor = () => {
            if (index + mentorsPerPage < upcomingTasks.length) {
                setIndex(index + mentorsPerPage);
            }
        };
    
        const prevMentor = () => {
            if (index > 0) {
                setIndex(index - mentorsPerPage);
            }
        };
    return (
        <>
            <div className="w-[43rem] h-[23.125rem] top-[38.875rem] left-[17.75rem] gap-[1.25rem]">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl font-semibold">Monthly Mentors</h1>
                    </div>
                        <button onClick={prevMentor} disabled={index <= 0} className={`${index <= 0 ? "opacity-50" : "hover:cursor-pointer"}`}>
                            <FaChevronLeft />
                        </button>
                        <button onClick={nextMentor} disabled={index + mentorsPerPage >= upcomingTasks.length} className="disabled:opacity-50 hover:cursor-pointer">
                            <FaChevronRight />
                        </button>
            </div>
        </>
    )
}
