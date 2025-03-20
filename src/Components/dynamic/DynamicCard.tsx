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
  deadlineText?: string;
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
    <div className="bg-[#FFFF] rounded-[0.625rem] p-8 sm:w-full min-h-[10rem] sm:h-40 flex flex-col justify-between">
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
  deadlineText,
}) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg bg-white flex flex-col gap-4 p-4">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-32 sm:h-40 object-cover rounded-lg"
        />
      </div>

      {/* Title & Role Section */}
      <div className="flex flex-col items-start">
        <h1 className="text-[#141522] font-['Plus_Jakarta_Sans'] font-semibold text-lg">
          {title}
        </h1>
        <p className="text-[#54577A] font-['Plus_Jakarta_Sans'] font-medium text-sm">
          {role}
        </p>
      </div>

      {/* Progress Section */}
      <div className="flex justify-between items-center w-full">
        <span className="text-[#141522] font-['Plus_Jakarta_Sans'] font-medium text-base">
          Progress
        </span>
        <span className="text-[#546FFF] font-['Plus_Jakarta_Sans'] font-medium text-base">
          {progress}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#546FFF] h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#546FFF] rounded-full border-2 border-white shadow-md"
          style={{ left: `calc(${progress}% - 8px)` }}
        ></div>
      </div>

      {/* Deadline Section */}
      <div className="flex items-center gap-2">
        <CiClock2 className="text-gray-500 text-lg" />
        <p className="text-gray-600 text-sm">
          {deadlineText
            ? `${deadline} ${deadlineText}`
            : `${deadline} days left`}
        </p>
      </div>
    </div>
  );
};
