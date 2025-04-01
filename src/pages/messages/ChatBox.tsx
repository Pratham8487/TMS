import { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import FileUploadIcon from "../../assets/attach-circle.svg";
import OnlineNotificationSymbol from "../../assets/OnlineNotification.png";
import ChatUI from "./ChatUI";
import chatData from "../../data/DummyChatData.json";
import SendIcon from "../../assets/Vector.png";
import arrowLeft from "../../assets/arrow-left.svg";

interface User {
  id: string;
  name: string;
  image?: string;
  Active?: boolean;
}

export default function ChatBox({
  selectedUser,
  onBack,
}: {
  selectedUser: User | null;
  onBack: () => void;
}) {
  const [messages, setMessages] = useState(chatData);
  const [newMessage, setNewMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const messageData = {
      id: messages.length + 1,
      sender: "user",
      name: selectedUser?.name || "Unknown",
      message: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      lastMessage: newMessage,
    };

    setMessages([...messages, messageData]);
    setNewMessage("");
  };

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col h-full w-full z-50">
        <div className="bg-white min-h-[6.25rem] w-full flex justify-between items-center px-6 border border-gray-100">
          <div className="flex items-center gap-3 w-full">
            <button className="p-2" onClick={onBack}>
              <img src={arrowLeft} alt="Back" width={30} height={30} />
            </button>
            <img
              src={selectedUser?.image || "Null"}
              alt="Not Found"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div className="space-y-1">
              <h1 className="text-gray-900 font-semibold text-sm leading-[1.5]">
                {selectedUser ? selectedUser.name : "Null"}
              </h1>
              {selectedUser?.Active && (
                <div className="flex items-center gap-1">
                  <img
                    src={OnlineNotificationSymbol}
                    alt="Online"
                    className="w-2.5 h-2.5"
                  />
                  <span className="text-gray-600 text-xs font-medium">
                    Online
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 hover:bg-gray-100 cursor-pointer">
              <CiVideoOn className="w-5 h-5 text-gray-500" />
            </div>
            <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 hover:bg-gray-100 cursor-pointer">
              <IoCallOutline className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          <ChatUI messages={messages} />
        </div>
        <div className="w-full bg-white px-4 sm:px-6 py-2.5 border-t border-gray-100">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Send your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow text-black min-h-[3rem] sm:min-h-[4rem] rounded-xl outline-none px-4"
            />
            <div className="flex">
              <img
                src={FileUploadIcon}
                alt="Attach"
                className="cursor-pointer w-10 h-10 p-2 mx-2"
              />
              <img
                src={SendIcon}
                onClick={sendMessage}
                className="cursor-pointer bg-[#546FFF] w-10 h-10 p-2 rounded-lg"
                alt="Send"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white min-h-[6.25rem] w-full flex justify-between items-center px-6 border border-gray-100">
        <div className="flex items-center p-2 sm:px-6 rounded-lg gap-3 w-full">
          <button className="md:hidden rounded-full p-2" onClick={onBack}>
            <img src={arrowLeft} alt="Back" width={30} height={30} />
          </button>
          <img
            src={selectedUser?.image || "Null"}
            alt="Not Found"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div className="space-y-1">
            <h1 className="text-gray-900 font-semibold text-sm leading-[1.5]">
              {selectedUser ? selectedUser.name : "Null"}
            </h1>
            {selectedUser?.Active && (
              <div className="flex items-center gap-1">
                <img
                  src={OnlineNotificationSymbol}
                  alt="Online"
                  className="w-2.5 h-2.5"
                />
                <span className="text-gray-600 text-xs font-medium">
                  Online
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 hover:bg-gray-100 cursor-pointer">
            <CiVideoOn className="w-5 h-5 text-gray-500" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 hover:bg-gray-100 cursor-pointer">
            <IoCallOutline className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
      {/* Chat Messages */}
      <ChatUI messages={messages} />
      {/* Input Box */}
      <div className="w-full bg-white px-4 sm:px-6 py-2.5 border-t border-gray-100">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Send your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow text-black min-h-[3rem] break-words sm:min-h-[4rem] rounded-xl outline-none px-4 placeholder:text-[#8E92BC] placeholder:font-[Plus Jakarta Sans] placeholder:font-medium placeholder:text-[0.875rem] placeholder:leading-[150%] placeholder:tracking-[-0.02em]"
          />
          <div className="flex">
            <img
              src={FileUploadIcon}
              alt="Attach"
              className="cursor-pointer w-10 h-10 p-2 mx-2"
            />
            <img
              src={SendIcon}
              onClick={sendMessage}
              className="cursor-pointer bg-[#546FFF] w-10 h-10 p-2 rounded-lg"
              alt="Send"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
