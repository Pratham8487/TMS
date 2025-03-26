// import React, { useState } from "react";
// import chatData from "../../data/DummyChatData.json";

// const ChatUI: React.FC = () => {
//   const [messages] = useState(chatData);
//   // const [newMessage, setNewMessage] = useState("");

//   return (
//     <div className="w-[53rem] h-[28rem] flex bg-gray-100">
//       <div className="w-2/3 flex flex-col">
//         {/* Chat Messages */}
//         <div className="w-[53rem] h-[25rem] flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 [&::-webkit-scrollbar]:hidden">
//           {messages.map((msg) => (
//             <>
//               <div
//                 key={msg.id}
//                 className={`flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`p-3 max-w-md rounded-lg shadow-md text-[0.875rem] leading-[150%] align-middle font-[Plus Jakarta Sans] ${
//                     msg.sender === "user"
//                       ? "bg-[#546FFF] text-white"
//                       : "bg-white text-black"
//                   }`}
//                 >
//                   {msg.image && (
//                     <img src={msg.image} alt="Attached" className="w-40 mb-2" />
//                   )}
//                   <p>{msg.message}</p>
//                 </div>
//               </div>
//               <p
//                 className={`text-[#8E92BC] font-[Plus Jakarta Sans] font-normal text-[0.75rem] leading-[100%] tracking-[-0.01em] align-middle flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 {msg.time}
//               </p>
//             </>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatUI;



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
    <div className="w-[53rem] h-[28rem] flex bg-gray-100">
      <div className="w-2/3 flex flex-col">
        <div className="w-[53rem] h-[25rem] flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 [&::-webkit-scrollbar]:hidden">
          {messages.map((msg) => (
            <div key={msg.id}>
              <div
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 max-w-md rounded-lg shadow-md text-[0.875rem] leading-[150%] align-middle font-[Plus Jakarta Sans] ${
                    msg.sender === "user"
                      ? "bg-[#546FFF] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {msg.image && (
                    <img src={msg.image} alt="Attached" className="w-40 mb-2" />
                  )}
                  <p>{msg.message}</p>
                </div>
              </div>
              <p
                className={`text-[#8E92BC] font-[Plus Jakarta Sans] font-normal text-[0.75rem] leading-[100%] tracking-[-0.01em] align-middle flex ${
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
