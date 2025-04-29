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
      className={`bg-[#FFFF] rounded-[0.625rem] px-4 sm:min-w-full  min-h-[10rem] sm:h-40 flex flex-col justify-between ${
        description
          ? "min-h-[14.25rem] py-6 sm:max-w-none max-w-[22.25rem]"
          : "min-h-[8.75rem] py-8 sm:max-w-none max-w-[20.5rem]"
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
        <div className="flex justify-between items-center max-w-30 min-w-16">
          <CiClock2 className="text-gray-500 text-lg" />
          <p className="text-gray-600 text-sm">
            {deadlineText
              ? `${deadline} ${deadlineText}`
              : `${deadline} days left`}
          </p>
        </div>
        <AvatarStack
          images={[
            "https://s3-alpha-sig.figma.com/img/1f59/2390/d69545d7cf9ff5be12e2248ebf54993a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aX~ARV05k4xnW4JuJgtx8iXzH-Zdk3O30zw1u69SMbHQoXH-k3dM27blC~bt9XdVPNRrZYqm2Ex6qosZFDIV9auCktsUoTVXakIXWU-eJyhuROgek8PNapAeWNSC8T6d78yRRQwYsMvOVXPyWVchokc3FqSO0l0NDTtteXjBA7Q77QruMuR6MSCQlphSiSiETmZ-zahTs3~QNxMCzHXEfvVl1kc0ZxUnr9tSbAEcDcwwQobt9AGw17CRopByMILEjTzKgv1J9S4bX86jLUXQ6iyavyRR7qT9rgCOHkxZmscigQukM9p9pPnKPEdcPwjcNATJ8yCe5XGnFPDMJMBZ3w__",
            "https://s3-alpha-sig.figma.com/img/177f/160a/7952386bb2224fea86799bdf8f4a8d55?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PChYq4zAekNep8IohATzeEfLFtmpqkWp6qb-nLNJfLvOcEy9zl6eQhH9v5qmno2ILvuraQLVpevjHpLF7K2e0z~20852FpY7q2h-4VMSFjKAaN7YXcrirHIct1CA6bkW9BU5yQAhmCvTFtRVkzHPqcsVxhsOmzVnrPxPY-0xCNtcjdXUB0cLAbhU8J9Kg08KZeBiEpIowGqJyoDryG~k1wJ8dYKzsZ4o4zOgLhi4Hcz5l3IOUKFy36weYc05EsDe~lNyu8kbh5AcikoUwF7DNV-R4hHRy3BAHJY6eUzX2snh7gENyvWd7L3awvj8w8Ec59Qgtfl1EMpC6qjnwqrnwA__",
            "https://s3-alpha-sig.figma.com/img/b5fc/ab22/6f5ded88606a0b51f545ab8a1eed1ecf?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jH-L5e~qPN6AR1vbjHO6VZiI9L71uxa97itmz-4kd5pKh2sPc~PCGxHZpmd7HsBv~PL01tHBxf30I5FQd~U9odF~FsJE7lvspDPh9CYeaW6ciWjc0Xc27PVq8F-3L2s9YBhjNlGEoMHF5Pn613uz4nBK1JbVEf72m33-3XZctQ0Dq1LC-Gddcdd7mhnMgGwiKf8uoyMN1M9QvNBz7y7n9gyY8CfN-qMHmnXhCu~xAuxYh3knfOICQC8CQ~T5qEcp6D-GWhvgKs2FPzYyMgHYPBG1OToLkNgEnU2wdktPw8aFIOVbmw0EuvI-GA1YdT7C~p732QiJ8CXvA8v8pYukfg__",
            "https://s3-alpha-sig.figma.com/img/3439/f222/a2802a5c7f50dfb8284561fe948260ca?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RANvXBn3WaQts3k0l8nCZPYPQaVCpSqqqRgdM68WuuIEeAfac4LIN8onFXN6cBx5w5Z598QlHKtdkofdd-4Asl0RuaFIhIkYtcTeNoqMJrFMJ5n1s1-P72vnwNlhGYSYHtQOnaRxGSh1IPtKDhYP6AjLiKQLwamJ-mxVC0RCgtQSP4gPHyZmSziEyXFTJUHcQORrEgBuAu0qRTGSjW0HUhACsU00ZaNO0yyrlA3v~OjCcYmhCFJlbScfFiBBi8BI5JKZqIzsSNHYJ7f~P4QmZ0ARfIg1mDaQeqmsEH~ORV0w5Pqooxl-0ZvVXB~dvxPZWPtRER~dfKxIy0lcI-qOag__",
            "https://s3-alpha-sig.figma.com/img/b724/5ad6/933997cbe7788b0459810be478939786?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gW7vAfo~K3jT6AqEFsjwmAmsNCL-Shyw31~uZ~xogzpFVRGymKQjx1nyED~BXnHcoZiAebEbULnJldXSYPScJ6elQlaY-3phxIZUmRFFu0NZP9bdlbAZckRMDI~PnofBaB1ee7AvcXvJ6EHg9d3D6skjCLuyJsL-1QMCnodhqC03MOdRUzuCtBb-~HtAMKkyMWO0r61jb0qZPZbSgfXHwiQZt-TgTgavvtqWeSvqSJkgOdntkIY~d3~BOkPDlKsjovl0mERBUBwMCX62G4D0XjjQWjoSQjVmwHFuWPoHhYdOxc11WaEqjVmQCA6YCo03ePLgqxhDcJhqEmNnh3bNxw__",
          ]}
        />
      </div>
    </div>
  );
};
