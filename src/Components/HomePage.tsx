import Img1 from "../assets/Cases.png";
import { FaChevronDown } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DynamicList from "./common/DynamicList";
import { MentorCard, UpcomingTaskCard } from "./common/DynamicCard";
import mentors from "../data/MentorsData.json";
import upcomingtask from "../data/UpcomingTaskData.json";
import Calendar from "./common/Calendar";
import TaskToday from "../Components/common/TaskToday";
// import { useNavigate } from "react-router-dom";

export default function Home() {

  const data = [
    { name: "S", value: 0 },
    { name: "M", value: 1 },
    { name: "T", value: 1 },
    { name: "W", value: 2 },
    { name: "T", value: 2 },
    { name: "F", value: 1 },
    { name: "S", value: 0 },
  ];

  // const navigate = useNavigate();

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="w-[5.25rem] h-[2.5rem] top-[3.8125rem] left-[5.125rem] gap-[0.625rem] rounded-[0.625rem] pt-[0.5rem] pr-[1.125rem] pb-[0.5rem] pl-[1.125rem] bg-[#141522]">
          <p className="text-white">{payload[0].value} Task</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-3">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_37%] gap-6 ">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:h-[17rem]">
              <div className="w-full sm:max-w-sm h-auto lg:h-full mt-4 sm:mt-[2rem] rounded-[0.625rem] bg-[#141522] flex flex-col justify-evenly py-4 px-5">
                <h1 className="text-white text-lg sm:text-xl">Running Task</h1>
                <p className="text-white text-lg sm:text-xl">65</p>
                <div className="flex items-center gap-4 sm:gap-8">
                  <img
                    src={Img1}
                    alt="img1"
                    className="w-14 h-14 sm:w-16 sm:h-16"
                  />
                  <h1 className="text-white text-sm sm:text-base">
                    100
                    <br />
                    Task
                  </h1>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:h-[17rem]">
              <div className="w-full max-w-[32rem] h-auto lg:h-full rounded-[0.625rem] bg-[#F5F5F7] mt-4 sm:mt-[2rem] lg:px-4 py-2 mx-auto">
                <div className="flex justify-between">
                  <h1 className="text-base sm:text-lg font-semibold">
                    Activity
                  </h1>
                  <div className="flex items-center gap-1">
                    <p className="text-xs sm:text-sm font-medium">This Week</p>
                    <FaChevronDown className="hover:cursor-pointer" />
                  </div>
                </div>
                <div className="w-full h-auto pt-1 sm:mt-[1.3rem] rounded-[0.625rem]  bg-white">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data}>
                      {/* Define a shadow filter */}
                      <defs>
                        <filter
                          id="shadow"
                          x="-20%"
                          y="-20%"
                          width="140%"
                          height="140%"
                        >
                          <feDropShadow
                            dx="2"
                            dy="2"
                            stdDeviation="3"
                            floodColor="rgba(20,21,34,0.5)"
                          />
                        </filter>
                      </defs>

                      <XAxis dataKey="name" tick={{ fill: "#141522" }} />
                      <YAxis ticks={[1, 2, 3]} tick={{ fill: "#141522" }} />
                      <Tooltip content={<CustomTooltip />} />

                      {/* Apply the shadow filter to the line */}
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#141522"
                        strokeWidth={2}
                        dot={{ r: 5 }}
                        filter="url(#shadow)" // Add shadow to the line
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Lists with Parent-Controlled Grid */}
          <div className="rounded-lg lg:p-4">
            <DynamicList
              title="Monthly Mentors"
              data={mentors}
              CardComponent={MentorCard}
              gridCols="lg:grid-cols-2 sm:grid-cols-2 grid-cols-1"
            />
          </div>

          <div className="rounded-lg lg:p-4">
            <DynamicList
              title="Upcoming Task"
              data={upcomingtask}
              CardComponent={UpcomingTaskCard}
              // CardComponent={({ id, ...props }) => (
              //   <div
              //     onClick={() => navigate(`/tasks/${id}`)}
              //     className="cursor-pointer"
              //   >
              //     <UpcomingTaskCard id={id} {...props} />
              //   </div>
              // )}
              gridCols="lg:grid-cols-2 sm:grid-cols-2 grid-cols-1"
            />
          </div>
        </div>

        <div className="space-y-8 [@media(min-width:1460px)]:-mt-26">
          <div className="bg-white rounded-lg p-6">
            <Calendar />
          </div>
          <div className="bg-white rounded-lg lg:p-2">
            <TaskToday />
          </div>
        </div>
      </div>
    </div>
  );
}
