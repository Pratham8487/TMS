import { BsThreeDots } from "react-icons/bs";
import TaskData from "../../data/TaskToday.json";
import { UpcomingTaskCard } from "../dynamic/DynamicCard";

const detailedTask = [
  {
    title: "Detail Task",
    role: "UI/UX Designer",
    tasks: [
      {
        id: 1,
        description: "Understanding the tools in Figma",
      },
      {
        id: 2,
        description: "Understand the basics of making designs",
      },
      {
        id: 3,
        description: "Design a mobile application with Figma",
      },
    ],
  },
];

export default function TaskToday() {
  return (
    <div className="max-h-[59rem] space-y-7">
      {/* Task Today Section */}
      <div className="flex justify-between items-center mt-4 px-4 md:px-0">
        <h1 className="text-[#141522] font-['Plus_Jakarta_Sans'] font-semibold text-[1rem] md:text-lg leading-[1.5] tracking-[-0.02em] flex items-center">
          Task Today
        </h1>
        <BsThreeDots className="text-lg md:text-xl" />
      </div>

      {/* Fixed Alignment for UpcomingTaskCard */}
      <div className="rounded-lg p-4 flex flex-col gap-2 md:gap-4 mx-auto bg-white w-full">
        {TaskData.map((task) => (
          <div key={task.id} className="w-full">
            <UpcomingTaskCard {...task} />
          </div>
        ))}
      </div>

      <hr className="m-4 md:m-6 text-gray-200" />

      {/* Detailed Task Section */}
      <div className="p-4 md:p-6 bg-white rounded-lg ">
        {/* Header */}
        <div className="flex justify-between items-center py-2 md:py-3">
          <h2 className="text-[#141522] font-['Plus_Jakarta_Sans'] font-semibold text-[0.9rem] md:text-[1rem] leading-[1.5] tracking-[-0.02em]">
            {detailedTask[0].title}
          </h2>
          <p className="text-[#54577A] font-['Plus_Jakarta_Sans'] font-medium text-[0.7rem] md:text-[0.75rem] leading-[1] tracking-[-0.02em]">
            {detailedTask[0].role}
          </p>
        </div>

        {/* Task List */}
        <ul className="mt-4 space-y-6 md:space-y-10">
          {detailedTask[0].tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-3 md:gap-4">
              <span className="text-[#141522] font-['Plus_Jakarta_Sans'] font-semibold text-[0.8rem] md:text-[0.875rem] leading-[1.5] tracking-[-0.02em] w-7 h-7 md:w-8 md:h-8 rounded-xl bg-gray-100 text-center flex items-center justify-center">
                {task.id}
              </span>
              <p className="text-[#141522] font-['Plus_Jakarta_Sans'] font-medium text-[0.8rem] md:text-[0.875rem] leading-[1.5] tracking-[-0.02em] flex items-center">
                {task.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-6">
          <button className="mt-8 md:mt-10 px-6 py-2 md:px-[7.5rem] md:py-3 w-full bg-[#546FFF] text-white text-sm md:text-base font-semibold rounded-lg">
            Go To Detail
          </button>
        </div>
      </div>
    </div>
  );
}
