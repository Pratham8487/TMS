import { useParams } from "react-router-dom";
import TaskData from "../data/TaskData.json";
import { FaUserFriends, FaClock } from "react-icons/fa";
import FileUpload from "../Components/dynamic/FileUpload";
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const task = TaskData.find((t) => t.id === parseInt(id!));
  const navigate = useNavigate();

  if (!task) {
    return <h1 className="text-center mt-10 text-red-500">Task Not Found</h1>;
  }

  return (
    <div className="w-full h-full gap-[2rem] py-[1rem] px-[1rem] lg:py-[2rem] lg:px-[4rem] md:py-[1rem] md:px-[1rem] grid grid-cols-1 md:grid-cols-3">
      <div className="bg-white h-full w-full rounded-xl space-y-1 md:col-span-2">
        <div className="border-4 rounded-xl border-yellow-300">
          <img
            src={task.image}
            className="w-full h-auto md:w-[47rem] md:h-[17rem] rounded-xl"
          />
        </div>
        <div className="p-4 py-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">{task.title}</h1>
          <div className="flex items-center space-x-2 text-gray-500 mt-2">
            <span>{task.role}</span>
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/mentors")}
            >
              | + Get Mentors
            </span>
          </div>
          <div className="flex items-center space-x-6 text-gray-600 mt-3">
            <div className="flex items-center space-x-1">
              <FaUserFriends className="text-gray-500" />
              <span>{task.studentsInvolved} Students Involved</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaClock className="text-gray-500" />
              <span>{task.duration}</span>
            </div>
          </div>
        </div>
        <div className="p-4 py-6 space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">Description</h1>
          <p className="text-[#141522] font-['Plus_Jakarta_Sans'] font-normal text-[14px] leading-[200%]">
            {task.description}
          </p>
        </div>
        <div className="p-4 py-6 space-y-3">
          <h2 className="text-xl font-semibold">Essence of Assessment</h2>
          <ul className="space-y-2">
            {task.items.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-blue-500">✔</span>
                <span className="text-[#141522] font-['Plus_Jakarta_Sans'] text-[14px] leading-[200%]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full max-w-sm md:w-auto h-auto md:h-[50.75rem] rounded-[0.625rem] p-4 bg-white">
        <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[0.875rem]">
          Assigned Assignment
        </h1>
        <div className="md:py-6  space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">{task.title}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-[#54577A] font-['Plus_Jakarta_Sans'] font-medium text-[0.875rem]">
              {task.role}
            </span>
          </div>
        </div>
        <div className="py-6">
          <h1 className="text-2xl font-bold text-gray-900">Detail Student</h1>
          <div className="flex justify-between items-center space-x-2 mt-2">
            <span className="text-[#54577A] font-medium text-[0.875rem]">
              Student Name
            </span>
            <p className="text-[#141522] font-semibold text-[0.875rem]">
              Dennis Nizioki
            </p>
          </div>
          <div className="flex justify-between items-center space-x-2 mt-2">
            <span className="text-[#54577A] font-medium text-[0.875rem]">
              Student Class
            </span>
            <p className="text-[#141522] font-semibold text-[0.875rem]">XI</p>
          </div>
          <div className="flex justify-between items-center space-x-2 mt-2">
            <span className="text-[#54577A] font-medium text-[0.875rem]">
              Student Number
            </span>
            <p className="text-[#141522] font-semibold text-[0.875rem]">10</p>
          </div>
        </div>
        <div className="py-6 space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">File Task</h1>
          <div className="flex justify-between items-center space-x-2 mt-2">
            <span className="text-[#54577A] font-medium text-[0.875rem]">
              Last Modified
            </span>
            <p className="text-[#141522] font-semibold text-[0.875rem]">
              1 March 2025
            </p>
          </div>
          <div className="mt-2">
            <span className="text-[#54577A] font-medium text-[0.875rem]">
              File Submission
            </span>
          </div>
          <FileUpload />
          <p className="text-[#54577A] text-[0.6rem]">
            *Drag or browse from device
          </p>
        </div>
        <div className="md:p-[1.5rem] p-[0.1rem]">
          <button className="mt-8 w-full px-6 py-2 bg-[#546FFF] text-white text-sm font-semibold rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
