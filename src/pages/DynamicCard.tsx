import React from "react";
import { CiClock2 } from "react-icons/ci";

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

interface UpcomingTask {
  id: number;
  image: string;
  title: string;
  role: string;
  progress: number;
  deadline: number;
}

export const MentorCard: React.FC<Mentor> = ({
  name,
  role,
  tasks,
  rating,
  reviews,
  image,
  followed,
}) => {
  return (
    <div className="bg-[#FFFF] w-[20.5rem] h-[8.75rem] rounded-[0.625rem] p-8 sm:w-80 min-h-[10rem] sm:h-40 flex flex-col justify-between">
      <div className="flex items-center gap-3 ">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 sm:w-10 sm:h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-base sm:text-sm">{name}</h3>
          <p className="text-gray-500 text-sm sm:text-xs">{role}</p>
        </div>
        <span className="text-blue-500 text-sm sm:text-xs ml-auto">
          {followed ? "Followed" : "+ Follow"}
        </span>
      </div>
      <div className="flex justify-between text-sm sm:text-xs text-gray-600 mt-2">
        <span>📜 {tasks} Task</span>
        <span>
          ⭐ {rating} ({reviews} Reviews)
        </span>
      </div>
    </div>
  );
};

export const UpcomingTaskCard: React.FC<UpcomingTask> = ({
  title,
  role,
  image,
  progress,
  deadline,
}) => {
  return (
    <div className="w-[20.5rem] h-[19.625rem] rounded-[0.625rem] bg-white border flex flex-col gap-4 p-4 shadow-md ">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-[6.875rem] object-cover rounded-[0.625rem]"
        />
      </div>

      {/* Title & Role Section */}
      <div className="flex flex-col items-start">
        <h1 className="text-[#141522] font-['Plus_Jakarta_Sans'] font-semibold text-[1rem] leading-[1.5] tracking-[-0.02em]">
          {title}
        </h1>
        <p className="text-[#54577A] font-['Plus_Jakarta_Sans'] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em]">
          {role}
        </p>
      </div>

      {/* Progress Section */}
      <div className="flex justify-between items-center w-full">
        <span className="text-[#141522] font-['Plus_Jakarta_Sans'] font-medium text-[1rem] leading-[1.5] tracking-[-0.02em]">
          Progress
        </span>
        <span className="text-[#546FFF] font-['Plus_Jakarta_Sans'] font-medium text-[1rem] leading-[1.5] tracking-[-0.02em]">
          {progress}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#546FFF] h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Deadline Section */}
      <div className="flex items-center gap-2">
        <CiClock2 className="text-gray-500 text-lg" />
        <p className="text-gray-600 text-sm">{deadline} days left</p>
      </div>
    </div>
  );
};

// Export both components
// export default { MentorCard, UpcomingTaskCard };
