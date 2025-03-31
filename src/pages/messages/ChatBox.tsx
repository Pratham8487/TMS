// import { useState } from "react";
// import { IoCallOutline } from "react-icons/io5";
// import { CiVideoOn } from "react-icons/ci";
// // import { RiAttachmentLine } from "react-icons/ri";
// import FileUploadIcon from "../../assets/attach-circle.svg";
// import OnlineNotificationSymbol from "../../assets/OnlineNotification.png";
// import ChatUI from "./ChatUI";
// import chatData from "../../data/DummyChatData.json";
// import SendIcon from "../../assets/Vector.png";
// import arrowLeft from "../../assets/arrow-left.svg";

// interface User {
//   id: string;
//   name: string;
//   image?: string;
//   Active?: boolean;
// }

// export default function ChatBox({
//   selectedUser,
//   onBack,
// }: {
//   selectedUser: User | null;
//   onBack: () => void;
// }) {
//   const [messages, setMessages] = useState(chatData);
//   const [newMessage, setNewMessage] = useState("");

//   const sendMessage = () => {
//     if (!newMessage.trim()) return; // Prevent sending empty messages

//     const messageData = {
//       id: messages.length + 1,
//       sender: "user",
//       name: selectedUser?.name || "Unknown",
//       message: newMessage,
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//       lastMessage: newMessage,
//     };

//     setMessages([...messages, messageData]);
//     setNewMessage("");
//   };

//   return (
//     <>
//       <div className="bg-[#FFFFFF] min-h-[6.25rem] w-full  flex justify-between items-center px-6 border border-gray-200">
//         {/* Header */}
//         <div className="w-full flex  items-center p-[0.625rem] sm:px-6 rounded-[0.625rem] gap-3">
//           <button
//             className="left-4 md:hidden rounded-full p-2"
//             onClick={onBack}
//           >
//             <img
//               src={arrowLeft}
//               alt="⭐"
//               width={30}
//               height={30}
//               style={{ fill: "#141522" }}
//             />
//           </button>

//           <img
//             src={selectedUser ? selectedUser.image : "Null"}
//             alt="Not Found"
//             className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
//           />
//           <div className="space-y-1">
//             <h1 className="text-[#141522] font-semibold text-sm leading-[1.5] tracking-[-0.02em]">
//               {selectedUser ? selectedUser.name : "Null"}
//             </h1>
//             {selectedUser && selectedUser.Active && (
//               <div className="flex justify-between items-center max-w-[3.6rem]">
//                 <img
//                   src={OnlineNotificationSymbol}
//                   alt=" "
//                   className="w-[0.625rem] h-[0.625rem]"
//                 />
//                 <span className="text-[#141522] font-['Plus_Jakarta_Sans'] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em]">
//                   Online
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 hover:cursor-pointer hover:bg-gray-100">
//             <CiVideoOn className="w-5 h-5 text-gray-500" />
//           </div>
//           <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 hover:cursor-pointer hover:bg-gray-100">
//             <IoCallOutline className="w-5 h-5 text-gray-500" />
//           </div>
//         </div>
//       </div>
//       {/* Chat Messages */}
//       <ChatUI messages={messages} />
//       {/* Input Box */}
//       <div className="relative w-full min-h-[5rem]  bg-white px-4 sm:px-6 py-2.5 border border-gray-200">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Send your message..."
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             className="w-full text-black min-h-[4rem] sm:min-h-[4rem] rounded-xl outline-none"
//           />
//           {/* <RiAttachmentLine className="cursor-pointer w-[2.8rem] h-[2.8rem] rounded-[0.625rem] p-[0.625rem] absolute right-15 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" /> */}
//           <img
//             src={FileUploadIcon}
//             alt="⭐"
//             width={30}
//             height={30}
//             className="cursor-pointer w-[2.8rem] h-[2.8rem] rounded-[0.625rem] p-[0.625rem] absolute right-15 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
//             style={{ fill: "#FFB054" }}
//           />
//           <img
//             src={SendIcon}
//             onClick={sendMessage}
//             className="cursor-pointer bg-[#546FFF] w-[2.75rem] h-[2.75rem] rounded-[0.625rem] p-[0.625rem] absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
//             alt="Send"
//           />
//         </div>
//       </div>
//     </>
//   );
// }






import { useState } from "react";
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
                <span className="text-gray-600 text-xs font-medium">Online</span>
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
      <div className="flex-grow overflow-y-auto">
        <ChatUI messages={messages} />
      </div>
      {/* Input Box */}
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
            className="cursor-pointer bg-blue-500 w-10 h-10 p-2 rounded-lg"
            alt="Send"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
