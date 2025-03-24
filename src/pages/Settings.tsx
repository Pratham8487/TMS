import { useState } from "react";
import { FormControl, MenuItem, Select, Button, Switch } from "@mui/material";

export default function Settings() {
  const [language, setLanguage] = useState("English (Default)");
  const [timezone, setTimezone] = useState("English (Default)");
  const [timeFormat, setTimeFormat] = useState("24  ");
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
              <Button
                variant={timeFormat === "24  " ? "contained" : "outlined"}
                onClick={() => setTimeFormat("24  ")}
                className="sm:w-auto"
              >
                24
              </Button>
              <Button
                variant={timeFormat === "12  " ? "contained" : "outlined"}
                onClick={() => setTimeFormat("12  ")}
                className="sm:w-auto"
              >
                12
              </Button>
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
