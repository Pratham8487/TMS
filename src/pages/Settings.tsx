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
      <div className="bg-white w-full max-w-5xl p-6 rounded-lg shadow-xs h-[32rem] flex flex-col">
        <div className="flex pb-2 mb-2 relative">
          <button
            className={`mr-4 font-semibold hover:cursor-pointer text-gray-500`}
            onClick={() => setActiveTab("General")}
          >
            General
          </button>
          <button
            className={`hover:cursor-pointer text-gray-500`}
            onClick={() => setActiveTab("Notification")}
          >
            Notification
          </button>
        </div>
        <hr
          className={`border-2 transition-all duration-300 ${
            activeTab === "General"
              ? "border-blue-500 w-18"
              : "border-transparent w-24"
          }`}
        />

        {/* General Settings */}
        {activeTab === "General" && (
          <div className="flex flex-col gap-6 py-2 flex-1">
            <FormControl className="w-48 space-y-3">
              <p>Language</p>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                sx={{ width: "25rem" }}
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
                sx={{ width: "25rem" }}
              >
                <MenuItem value="English (Default)">English (Default)</MenuItem>
                <MenuItem value="GMT">IST</MenuItem>
                <MenuItem value="IST">GMT</MenuItem>
              </Select>
            </FormControl>

            <div className="flex flex-wrap gap-4 py-2">
              {["24", "12"].map((format) => (
                <label
                  key={format}
                  className={`flex items-center gap-2 border rounded-lg px-4 py-2 cursor-pointer ${
                    timeFormat === format
                      ? "border-blue-500 text-blue-600"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeFormat"
                    value={format}
                    checked={timeFormat === format}
                    onChange={() => setTimeFormat(format)}
                    className="hidden"
                  />
                  <span>{format} Hours</span>
                  <span
                    className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                      timeFormat === format
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {timeFormat === format && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === "Notification" && (
          <div className="flex flex-col gap-4 flex-1">
            {["Message", "Task Update", "Task Deadline", "Mentor Help"].map(
              (label) => (
                <div key={label} className="flex items-center gap-2 p-1">
                  <Switch color="primary" />
                  <p>{label}</p>
                </div>
              )
            )}
          </div>
        )}

        {/* Save Button - Always at the Bottom */}
        <Button
          variant="contained"
          color="primary"
          className="mt-auto max-w-[13.5rem]"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
