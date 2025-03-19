import { useState } from "react";
import {
  format,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
} from "date-fns";
// import { ArrowRight2, ArrowLeft2 } from "iconsax-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DAYS_OF_WEEK = [
  { key: "S1", label: "S" }, // Updated key
  { key: "M", label: "M" },
  { key: "T", label: "T" },
  { key: "W", label: "W" },
  { key: "T2", label: "T" }, // Updated key
  { key: "F", label: "F" },
  { key: "S2", label: "S" }, // Updated key
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const weekDays = eachDayOfInterval({
    start: startOfWeek(currentWeek, { weekStartsOn: 0 }),
    end: endOfWeek(currentWeek, { weekStartsOn: 0 }),
  });

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg w-full overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentWeek(subWeeks(currentWeek, 1))}>
          {/* <ArrowLeft2 className="h-5 w-5" color="#333" /> */}
          <span className="h-5 w-5 hover:cursor-pointer" color="#333">
            <FaChevronLeft />
          </span>
        </button>
        <h2 className="text-base sm:text-lg font-semibold">
          {format(currentWeek, "MMMM yyyy")}
        </h2>
        <button onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}>
          {/* <ArrowRight2 className="h-5 w-5" color="#333" /> */}
          <span className="h-5 w-5 hover:cursor-pointer" color="#333">
            <FaChevronRight />
          </span>
        </button>
      </div>

      <div className="grid grid-cols-7 text-center mb-3 relative text-xs sm:text-sm">
        {DAYS_OF_WEEK.map((day, index) => (
          <div
            key={index}
            className="font-semibold text-gray-500 flex justify-center items-center h-6 sm:h-8"
          >
            {day.label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 relative">
        {weekDays.map((day) => {
          const isSelected =
            format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

          return (
            <button
              key={day.toString()}
              className={`relative flex items-center justify-center h-6 sm:h-8 w-full ${
                isSelected ? "bg-blue-600 rounded-full" : ""
              }`}
              onClick={() => setSelectedDate(day)}
            >
              <span
                className={`relative z-10 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full transition text-xs sm:text-sm ${
                  isSelected ? "text-white" : "text-gray-900"
                }`}
              >
                {format(day, "d")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
