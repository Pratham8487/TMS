import { useState } from "react";
import { FormControl, MenuItem, Select, Button, Switch } from "@mui/material";

export default function Settings() {
  const [language, setLanguage] = useState("English (Default)");
  const [timezone, setTimezone] = useState("English (Default)");
  const [timeFormat, setTimeFormat] = useState(() => {
    return localStorage.getItem("timeFormat") || "24";
  });
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="p-10 flex flex-col gap-6">
      <div className="bg-white w-full max-w-5xl p-6 rounded-lg shadow-md h-[32rem] flex flex-col">
        <div className="flex border-b pb-2 mb-6">
          <button
            className={`mr-4 font-semibold hover:cursor-pointer ${
              activeTab === "General"
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("General")}
          >
            General
          </button>
          <button
            className={`hover:cursor-pointer ${
              activeTab === "Notification"
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Notification")}
          >
            Notification
          </button>
        </div>

        {/* General Settings */}
        {activeTab === "General" && (
          <div className="flex flex-col gap-6 py-2 flex-1">
            <FormControl className="w-48 space-y-3">
              <p>Language</p>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <MenuItem value="English (Default)">English (Default)</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
              </Select>
            </FormControl>

            <FormControl className="w-48 space-y-3">
              <p>Timezone</p>
              <Select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
              >
                <MenuItem value="English (Default)">English (Default)</MenuItem>
                <MenuItem value="GMT">IST</MenuItem>
              </Select>
            </FormControl>

            <div className="flex flex-wrap gap-4 py-2">
              <label
                className={`flex items-center gap-2 border rounded-lg px-4 py-2 cursor-pointer ${
                  timeFormat === "24"
                    ? "border-blue-500 text-blue-600"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                <input
                  type="radio"
                  name="timeFormat"
                  value="24"
                  checked={timeFormat === "24"}
                  onChange={() => setTimeFormat("24")}
                  className="hidden"
                />
                <span>24 Hours</span>
                <span
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                    timeFormat === "24" ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {timeFormat === "24" && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </span>
              </label>

              <label
                className={`flex items-center gap-2 border rounded-lg px-4 py-2 cursor-pointer ${
                  timeFormat === "12"
                    ? "border-blue-500 text-blue-600"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                <input
                  type="radio"
                  name="timeFormat"
                  value="12"
                  checked={timeFormat === "12"}
                  onChange={() => setTimeFormat("12")}
                  className="hidden"
                />
                <span>12 Hours</span>
                <span
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                    timeFormat === "12" ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {timeFormat === "12" && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === "Notification" && (
          <div className="flex flex-col gap-4 flex-1">
            {[
              { name: "message", label: "Message" },
              { name: "taskUpdate", label: "Task Update" },
              { name: "taskDeadline", label: "Task Deadline" },
              { name: "mentorHelp", label: "Mentor Help" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 p-1 space-y-4"
              >
                <Switch color="primary" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Save Button - Always at the Bottom */}
        <Button
          variant="contained"
          color="primary"
          className="mt-auto w-full sm:w-auto"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
