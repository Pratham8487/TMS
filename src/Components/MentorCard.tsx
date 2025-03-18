import React from "react";

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
const MentorCard: React.FC<Mentor> = ({ name, role, tasks, rating, reviews, image, followed }) => {
    return (
        <div className="bg-[#FFFF] w-[20.5rem] h-[8.75rem] rounded-[0.625rem] p-8 sm:w-80 min-h-[10rem] sm:h-40 flex flex-col justify-between">
            <div className="flex items-center gap-3 ">
                <img src={image} alt={name} className="w-12 h-12 sm:w-10 sm:h-10 rounded-full" />
                <div>
                    <h3 className="font-semibold text-base sm:text-sm">{name}</h3>
                    <p className="text-gray-500 text-sm sm:text-xs">{role}</p>
                </div>
                <span className="text-blue-500 text-sm sm:text-xs ml-auto">{followed ? "Followed" : "+ Follow"}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-xs text-gray-600 mt-2">
                <span>📜 {tasks} Task</span>
                <span>⭐ {rating} ({reviews} Reviews)</span>
            </div>
        </div>
    );
};

export default MentorCard;
