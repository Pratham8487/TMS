import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { RiAttachmentLine } from "react-icons/ri";
import OnlineNotificationSymbol from "../../assets/OnlineNotification.png";
import SendIcon from "../../assets/Vector.png";

interface User {
  id: string;
  name: string;
  image?: string;
  Active?: boolean;
}

export default function ChatBox({
  selectedUser,
}: {
  selectedUser: User | null;
}) {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full h-[5rem] flex justify-between items-center px-6">
        {/* Profile Section */}
        <div className="flex items-center p-[0.625rem] rounded-[0.625rem] gap-3">
          <img
            src={selectedUser ? selectedUser.image : "Null"}
            alt="Not Found"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="space-y-1">
            <h1 className="text-[#141522] font-semibold text-sm leading-[1.5] tracking-[-0.02em]">
              {selectedUser ? selectedUser.name : "Null"}
            </h1>
            {selectedUser && selectedUser.Active && (
              <div className="flex justify-between items-center w-[3.6rem]">
                <img
                  src={OnlineNotificationSymbol}
                  alt=" "
                  className="w-[0.625rem] h-[0.625rem]"
                />
                <span className="text-[#141522] font-['Plus_Jakarta_Sans'] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em]">
                  Online
                </span>
              </div>
            )}
          </div>
        </div>
        {/* Icons Section */}
        <div className="flex gap-4">
          <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full border border-gray-200 hover:cursor-pointer">
            <CiVideoOn className="w-5 h-5 text-gray-500" />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full border border-gray-200 hover:cursor-pointer">
            <IoCallOutline className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[5rem] bg-white ">
        <div className="relative ">
          <input
            type="text"
            placeholder="Send your message..."
            className="w-full p-2 pl-6 pr-12 text-[#8E92BC] h-[5rem] rounded-xl outline-none "
          />
          <RiAttachmentLine className="cursor-pointer w-[2.8rem] h-[2.8rem] gap-[0.625rem] rounded-[0.625rem] p-[0.625rem] absolute right-15 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <img
            src={SendIcon}
            className="cursor-pointer bg-[#546FFF] w-[2.75rem] h-[2.75rem] gap-[0.625rem] rounded-[0.625rem] p-[0.625rem] absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
            alt="not found"
          />
        </div>
      </div>
    </>
  );
}
