import React from "react";
import { CiClock2 } from "react-icons/ci";
import MyIcon from "../../assets/Star.svg";
import taskIcon from "../../assets/taskIcon.svg";

interface Mentor {
  id: number;
  name: string;
  role: string;
  tasks: number;
  rating: number;
  reviews: number;
  image: string;
  followed: boolean;
  description?: string;
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
  description,
}) => {
  return (
    <div
  className={`bg-[#FFFF] rounded-[0.625rem] px-4 sm:w-full min-h-[10rem] sm:h-40 flex flex-col justify-between max-w-[20.5rem] ${
    description ? "min-h-[14.25rem] py-6 max-w-[22.25rem]" : "min-h-[8.75rem] py-8 max-w-[20.5rem]"
  }`}
>

      <div className="flex items-center gap-3 ">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 sm:w-10 sm:h-10 rounded-full"
        />
        <div>
          <h3 className="sm:text-sm text-[#141522] font-[Plus Jakarta Sans] font-semibold text-[1rem] leading-[150%] tracking-[-0.02em] align-middle">
            {name}
          </h3>
          <p className="sm:text-xs text-[#9C9CA4] font-[Plus Jakarta Sans] font-normal text-[0.75rem] leading-[100%] tracking-[-0.01em] align-middle">
            {role}
          </p>
        </div>
        <span
          className={`${
            followed ? "text-[#54577A]" : "text-[#546FFF] sm:text-xs"
          } font-[Plus Jakarta Sans] font-medium text-[0.875rem] leading-[150%] tracking-[-0.02em] text-right align-middle`}
        >
          {followed ? "Followed" : "+ Follow"}
        </span>
      </div>

      {description && (
        <div>
          <p className="text-[#8E92BC] font-[Plus Jakarta Sans] font-medium text-[0.875rem] leading-[200%] tracking-[0px] align-middle">
            {description}
          </p>
        </div>
      )}

      <div className="flex justify-between text-sm sm:text-xs text-gray-600 mt-2">
        <div className="flex gap-1.5">
          <img
            src={taskIcon}
            alt="📜"
            width={15}
            height={15}
            style={{ fill: "#54577A" }}
          />
          <span className="text-[#141522] font-[Plus Jakarta Sans] font-medium text-[0.875rem] leading-[150%] tracking-[-0.02em] align-middle">
            {tasks} Task
          </span>
        </div>
        <div className="flex gap-1.5">
          <img
            src={MyIcon}
            alt="⭐"
            width={10}
            height={10}
            style={{ fill: "#FFB054" }}
          />
          <span className="text-[#141522] font-[Plus Jakarta Sans] font-medium text-[0.875rem] leading-[150%] tracking-[-0.02em] align-middle">
            {rating} ({reviews} Reviews)
          </span>
        </div>
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
    <div className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg bg-white flex flex-col gap-4 justify-between p-4 max-h-[25rem]">
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
