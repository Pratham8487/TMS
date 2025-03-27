import React from "react";
import { CiClock2 } from "react-icons/ci";
import MyIcon from "../../assets/Star.svg";
import taskIcon from "../../assets/taskIcon.svg";
import AvatarStack from "./AvatarStack";

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
        description
          ? "min-h-[14.25rem] py-6 max-w-[22.25rem]"
          : "min-h-[8.75rem] py-8 max-w-[20.5rem]"
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
      <div className="flex items-center gap-2 justify-between">
        <div className="flex justify-between items-center">
          <CiClock2 className="text-gray-500 text-lg" />
          <p className="text-gray-600 text-sm">
            {deadlineText
              ? `${deadline} ${deadlineText}`
              : `${deadline} days left`}
          </p>
        </div>
        <AvatarStack
          images={[
            "https://s3-alpha-sig.figma.com/img/b1ce/594a/a60dc1bbd63c7d6b0436844674f5f409?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k6pLgyWPssTXmiBaYsx7dlEbz4dwejW5PTYFhv2WB-TRmUqSVFHMVMHO5n9ZcnkerGKj2hjcOGj7MEKDBd5IECg27kd3FBW9YlZhg3E7imsEEB6ydDPZlgBAxUSPXsRsv8HOgnqWWhybpPbTwKULCapvAu4V3xJkLTnjLCgDOB44-htGJyu3iVQxJX0TEIPJYBp~uQUJ6AJJR6PI8un2Fz3042cvR3HpNi5JTz3Zv0ZO~XUB9ueP-bZbVydcHo6QQa8aFO40gKzEjsH4rChCedLEgrj9bbRbaQT9PzeEwqRg-EvVs9gHwQkHf5aB0OE8pzCYWiqQG15aoHpW6uZ2Ng__",
            "https://s3-alpha-sig.figma.com/img/9a63/ea74/7ccfb0b485be19dcfb57fe5fc11faa02?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tAuz1X5YUoCYiyQ37gDxatKiipzhcp2j4h9K995n3dfnTtUtVQQkXJ1NZfNFJuxBwjyS4XmHRzrpKbn0xzzxj5y5xcXZiyWLvsBvQZfQYXmQ9Q8-mEFnhTXH5pJPsH7iitlIvYesei8e6j79eX5F7pE9tZ-aXJuFzXG5aigza5ySHqY67gM8EOmIPhiFsj4ekz58pWmGHl6hyORkDn4fnWi8BWgxlhIaBbkqDLlsQN2bbhY-ZLpMNHqvFJLBob9Z4RkriBNW4f~SGcHpSdMduTWiJb4g0uycupCAYaoCBRAbDYs8YC-6q4oOtvy7WIABMIsGK3BbyBc36VR-~W-Z6g__",
            "https://s3-alpha-sig.figma.com/img/342c/ef3a/07b3875f50624f13e6475ebb8f2726fe?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n5Fcmfg0GbegJA~UnsBh7M1rMdWu-LnWXnKwJEmm0mZKzO7FsF76tF5rEW8Fsnydw5uB--8XAIJoy9fEwyAhxfNIwH9ArkhFQ4WEPEnQYkiYA~vF-GfbY8z1YxkbsGo~3SUYsfIddH3-IEMRktMow6CHVvbAqjYvcJCbXiKgZljckNqTAc4Gtr5QimgoC2SQaezv4pWrVt-PgN1eYP69-ulagVhUySLBX51YCbPyPO7T55DrYPzxYFuaAvI1YSIEBrZA29yxuIDnZR-sbpMFoT9WN1Btcr6jPobTc2mpKGFuZwebuZpsbyNy7OwEO8vPvkt7EHv~ftUrSTiwvkIkww__",
            "https://s3-alpha-sig.figma.com/img/3383/da9a/5e6800bc07f249dba70a9128599ffaa6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S-HEuVEFXq86UNSiSkUn1KKQhroK7p78tiR-wYzA3DVulS5R~rbeEWSVl~R04JGbABSlu~ZayfjtdFgSiqRmXu1d8aMNpIjQJxouTspbgR4hUL80CCx7IFdkIGC3OFsLZ05grNkilBrJYkAi8I6f7P7qsi0prkC0EW1TDcpIJoasdNfyIXX0TMlCUsurYQMqasYZ7vKn7RvNIVJhK25sBn55ILkE9-FZ2jLbjoe9lcbMAtE2oH0icIvjijMPcqiip3A6Z6ATtDwDX92aOWdPaY2XI1bzONU7IM8hof3opvOr8E7r9U8kXssqrW8nFURvnJWcVb~YrZjny2wYQ4tSlA__",
            "https://s3-alpha-sig.figma.com/img/2860/fb72/13b5c24abd9ec46b92b8ba6b8ca330d5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cjSCchr5FN4yn6oT2K8I4tS-guYSAwQDcoAF~BI3hZH0K2nakVpKf30qp4GYydA-LBJb4iPzzL4HOFzUtQzZfDT2ghbl0UgVy11YGGW9f5uDxRa7uC2hiTcrPer5-X85vgF~05lu8Plmos~tdi0hBwFiMBqPIiYWTwADp036yl27edcCCabIRwM76apQJ4q9C13KRTSkmlBbyym~2OeC9VLbJxjvComOwVXrGaJjxLaIpWZ9Z5NG6MVTSnhS-XYfvhR2Z4PvvKSnUNYcc08uvg8eH6xZRqsB4IOliWSm6okOridLiWJK9zGlXhNekiccNo-U-LetfKT9uNIIBENpqA__",
          ]}
        />
      </div>
    </div>
  );
};
