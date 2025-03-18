import Img1 from "../assets/Cases.png";
import { FaChevronDown } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import DynamicList from "../pages/DynamicList";
import { MentorCard } from "../pages/DynamicCard";
import { UpcomingTaskCard } from "../pages/DynamicCard";
import mentors from "../data/MentorsData.json";
import upcomingtask from "../data/UpcomingTaskData.json";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 w-full sm:w-[63%]">
      <div className="w-full sm:max-w-sm h-auto mt-4 sm:mt-[2rem] rounded-[0.625rem] bg-[#141522] flex flex-col justify-evenly py-4 px-5">
        <h1 className="text-white text-lg sm:text-xl">Running Task</h1>
        <p className="text-white text-lg sm:text-xl">65</p>
        <div className="flex items-center gap-4 sm:gap-8">
          <img src={Img1} alt="img1" className="w-14 h-14 sm:w-16 sm:h-16" />
          <h1 className="text-white text-sm sm:text-base">
            100
            <br />
            Task
          </h1>
        </div>
      </div>

      <div className="flex w-full lg:col-span-2 ">
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
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#141522"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto col-span-1 md:col-span-2 lg:col-span-3 p-4 rounded-[0.625rem] mt-4">
        {/* <div className="mt-4"> */}
        <DynamicList
          title="Monthly Mentors"
          data={mentors}
          CardComponent={MentorCard}
        />
        {/* </div> */}
      </div>
      <div className="w-[43rem] h-[12.25rem] top-[24.625rem] left-[17.75rem] gap-[1.25rem]">
        <DynamicList
          title="Upcoming Task"
          data={upcomingtask}
          CardComponent={UpcomingTaskCard}    
          />
      </div>
    </div>
  );
}
