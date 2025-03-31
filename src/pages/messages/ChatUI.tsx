import React, { useEffect, useRef } from "react";

interface Message {
  id: number;
  sender: string;
  message: string;
  time: string;
  image?: string;
}

const ChatUI: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full lg:min-h-[27.5rem] lg:max-h-[27.5rem] flex bg-gray-100">
      <div className="w-2/3 flex-1 flex flex-col">
        <div
          ref={chatContainerRef}
          className="w-full h-full flex-1 overflow-y-auto sm:p-6 p-4 space-y-4 bg-gray-50 [&::-webkit-scrollbar]:hidden"
        >
          <div className="relative w-auto max-w-[5.25rem] h-auto px-4 py-2 mx-auto gap-[0.625rem] rounded-[0.625rem] pt-[0.5rem] pr-[1.125rem] pb-[0.5rem] pl-[1.125rem] bg-[#141522]">
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
                  className={`break-words p-[0.5rem_0.75rem] gap-[0.75rem] max-w-xs sm:max-w-md md:max-w-lg shadow-[0px_1px_3px_0px_#546FFF1A] text-[0.875rem] leading-[150%] align-middle font-[Plus Jakarta Sans] ${
                    msg.sender === "user"
                      ? "bg-[#546FFF] text-white rounded-bl-[0.625rem] rounded-br-[0.625rem] rounded-tl-[0.625rem]"
                      : "bg-white text-black rounded-bl-[0.625rem] rounded-br-[0.625rem] rounded-tr-[0.625rem]"
                  }`}
                  style={{
                    display: "inline-block",
                    maxWidth: "50%",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="Message attachment"
                      className="mb-2 max-w-full w-[23.25rem] h-[8.8125rem] rounded-[0.3125rem]"
                    />
                  )}
                  <p
                    className={`${
                      msg.sender === "user" ? "pr-2" : "pr-[0.625rem]"
                    }`}
                  >
                    {msg.message}
                  </p>
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
