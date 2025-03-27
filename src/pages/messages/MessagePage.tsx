// import { useState } from "react";
// import MessageSidebar from "../Components/dynamic/MessageSidebar";
// import ChatBox from "../Components/dynamic/ChatBox";

// interface User {
//   id: string;
//   name: string;
//   image?: string;
//   active?: boolean;
// }

// const MessagePage = () => {
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);

//   return (
//     <div className="flex w-full ">
//       {/* Sidebar - Takes full width on md screens, 1/3rd on larger screens */}
//       <div className={`w-full md:w-1/3 bg-white ${selectedUser ? "hidden md:block" : "block"}`}>
//         <MessageSidebar onUserSelect={setSelectedUser} />
//       </div>

//       {/* ChatBox - Hidden on md screens until user selects a chat */}
//       <div className={`w-full md:w-2/3 bg-gray-100 ${selectedUser ? "block" : "hidden"}`}>
//         {selectedUser && <ChatBox selectedUser={selectedUser} />}
//       </div>
//     </div>
//   );
// };

// export default MessagePage;

import { useState } from "react";
import MessageSidebar from "./MessageSidebar";
import ChatBox from "./ChatBox";

interface User {
  id: string;
  name: string;
  image?: string;
  active?: boolean;
}

const MessagePage = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar - Hidden on md when chat is open, always visible on lg */}
      <div
        className={`w-full md:w-1/3 bg-white ${
          selectedUser ? "hidden md:block lg:block" : "block"
        }`}
      >
        <MessageSidebar onUserSelect={handleUserSelect} />
      </div>

      {/* ChatBox - Takes full width on md but keeps sidebar on lg */}
      <div
        className={`w-full md:w-2/3 ${
          selectedUser ? "block" : "hidden md:block"
        }`}
      >
        {selectedUser && (
          <ChatBox
            selectedUser={selectedUser}
            onBack={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default MessagePage;
