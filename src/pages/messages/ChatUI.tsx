import React from "react";

interface Message {
  id: number;
  sender: string;
  message: string;
  time: string;
  image?: string;
}

const ChatUI: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="w-full lg:min-h-[28rem] lg:max-h-[30rem] flex bg-gray-100">
      <div className="w-2/3 flex-1 flex flex-col">
        <div className="w-full h-full flex-1 overflow-y-auto sm:p-6 p-4 space-y-4 bg-gray-50 [&::-webkit-scrollbar]:hidden">
          <div className="relative w-auto max-w-[5.25rem] h-auto px-4 py-2 mx-auto  gap-[0.625rem] rounded-[0.625rem] pt-[0.5rem] pr-[1.125rem] pb-[0.5rem] pl-[1.125rem] bg-[#141522]">
            <p className="text-white">Today</p>
          </div>
          {messages.map((msg) => (
            <div key={msg.id}>
              <div
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 max-w-xs sm:max-w-md md:max-w-lg  shadow-md text-[0.875rem] leading-[150%] align-middle font-[Plus Jakarta Sans] ${
                    msg.sender === "user"
                      ? "bg-[#546FFF] text-white rounded-bl-lg rounded-br-lg rounded-tl-lg"
                      : "bg-white text-black rounded-bl-lg rounded-br-lg rounded-tr-lg"
                  }`}
                >
                  <p>{msg.message}</p>
                </div>
              </div>
              <p
                className={`py-2 text-[#8E92BC] font-[Plus Jakarta Sans] font-normal text-[0.75rem] leading-[100%] tracking-[-0.01em] align-middle flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
