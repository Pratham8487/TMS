import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";

export default function ChatBox() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full h-[5rem] flex justify-between items-center px-6">
        {/* Profile Section */}
        <div className="flex items-center hover:bg-[#FAFAFA] p-[0.625rem] rounded-[0.625rem] cursor-pointer gap-3">
          <img
            src="https://s3-alpha-sig.figma.com/img/fd86/41ab/0d7ff5df36f59b67d462760d0e7cb22c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jdg1kcda8vlNyRD3vjBgbpuvxETVPGkzDeRmHfd0754dp1-4NHGAiXUkmd41XK~O3SSzsHcTWGFhPxD-2HhKbL7q~p~rCc6U4QGR6TGHG4qQHpK2Ag4k6OAsFMxxMMrIZm7iGlw4bgMxf8gbIHFmBbdTWaEt1bqm4JjPUY-p8f8kcaRQaB6TuNTmYBVnEuOh1-Nu1QtaycScsAdOCLhK-b95C60WvkLzwSLdcyewdMyo7jVO53dU0cwXxDpArtwJzG7z7bHDKe8lQIdJmYEPCPeVgqGe1~WzLGw4-vGkMi183evJPqLtltPN9VL1lcZKEjXYHa~3p1xlM2fvmR~rDw__"
            alt="Not Found"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-[#141522] font-semibold text-sm leading-[1.5] tracking-[-0.02em]">
              Angelina
            </h1>
            <span className="text-[#141522] font-['Plus_Jakarta_Sans'] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em]">
              Online
            </span>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex gap-4">
          <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full border border-gray-200">
            <IoCallOutline className="w-5 h-5 text-gray-500" />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full border border-gray-200">
            <CiVideoOn className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[5rem] bg-white border"></div>
    </>
  );
}
