import React, { useState } from "react";
import {
  format,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const DAYS_OF_WEEK = [
  { key: "S1", label: "S" },
  { key: "M", label: "M" },
  { key: "T", label: "T" },
  { key: "W", label: "W" },
  { key: "T2", label: "T" },
  { key: "F", label: "F" },
  { key: "S2", label: "S" },
];

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());

  const weekDays = eachDayOfInterval({
    start: startOfWeek(currentWeek, { weekStartsOn: 0 }),
    end: endOfWeek(currentWeek, { weekStartsOn: 0 }),
  });

  return (
    <div className="bg-white p-2 sm:p-4 rounded-lg w-full overflow-hidden">
      {/* Header with navigation */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentWeek(subWeeks(currentWeek, 1))}>
          <FaChevronLeft className="h-5 w-5" color="#333" />
        </button>
        <h2 className="text-base sm:text-lg font-semibold">
          {format(currentWeek, "MMMM yyyy")}
        </h2>
        <button onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}>
          <FaChevronRight className="h-5 w-5" color="#333" />
        </button>
      </div>

      {/* Weekday labels */}
      <div className="grid grid-cols-7 text-center mb-3 relative text-xs sm:text-sm">
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day.key}
            className="font-semibold text-gray-500 flex justify-center items-center h-6 sm:h-8 z-100"
          >
            {day.label}
          </div>
        ))}
      </div>

      {/* Days of the week */}
      <div className="grid grid-cols-7 relative">
        {weekDays.map((day) => {
          const isSelected =
            format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
          return (
            <button
              key={day.toString()}
              className="relative flex items-center justify-center h-6 sm:h-8 w-full"
              onClick={() => setSelectedDate(day)}
            >
              {isSelected && (
                <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-16 sm:h-20 bg-gray-900 rounded-full text-white"></div>
              )}
              <span
                className={`relative z-10 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full transition text-xs sm:text-sm ${
                  isSelected ? "bg-blue-600 text-white" : "bg-gray-200"
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
