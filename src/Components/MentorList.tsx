import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import MentorCard from "../Components/MentorCard";
import Img2 from '../assets/p1.png';
import Img3 from '../assets/p2.png';

const mentors = [
    { id: 1, name: "Curious George", role: "UI UX Design", tasks: 40, rating: 4.7, reviews: 750, image: Img2, followed: false },
    { id: 2, name: "Abraham Lincoln", role: "3D Design", tasks: 32, rating: 4.9, reviews: 510, image: Img3, followed: false },
    { id: 3, name: "Marie Curie", role: "Physics Research", tasks: 28, rating: 5.0, reviews: 620, image: Img3, followed: true },
    { id: 4, name: "Abrar Meonm", role: "Scientist", tasks: 28, rating: 5.0, reviews: 620, image: Img2, followed: true },
    { id: 5, name: "Jack Cruise", role: "Web Design", tasks: 56, rating: 2.7, reviews: 254, image: Img2, followed: false },
    { id: 6, name: "Tom Holland", role: "UI UX Design", tasks: 26, rating: 3.8, reviews: 284, image: Img3, followed: true },
];
const MentorList: React.FC = () => {
    const [index, setIndex] = useState(0);
    const isMobile = window.innerWidth < 640;
    const mentorsPerPage = isMobile ? 1 : 2;

    const nextMentor = () => {
        if (index + mentorsPerPage < mentors.length) {
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
            <div className="flex justify-between gap-2 mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl font-semibold">Monthly Mentors</h1>
                </div>
                <button onClick={prevMentor} disabled={index <= 0} className={`${index <= 0 ? "opacity-50" : "hover:cursor-pointer"}`}>
                    <FaChevronLeft />
                </button>
                <button onClick={nextMentor} disabled={index + mentorsPerPage >= mentors.length} className="disabled:opacity-50 hover:cursor-pointer">
                    <FaChevronRight />
                </button>
            </div>
            <div className="flex flex-wrap gap-10 justify-start lg:justify-start pt-6 w-full">
                {mentors.slice(index, index + mentorsPerPage).map((mentor) => (
                    <MentorCard key={mentor.id} {...mentor} />
                ))}
            </div>
        </>
    );
};

export default MentorList;
