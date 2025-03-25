import { useState } from "react";
import MessageSidebar from "../Components/dynamic/MessageSidebar";
import ChatBox from "../Components/dynamic/ChatBox";

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
    <div className="grid grid-cols-3 gap-0 overflow-hidden h-[38.3rem]">
      <div className="col-span-1 bg-white">
        <MessageSidebar onUserSelect={handleUserSelect} />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        {selectedUser && <ChatBox selectedUser={selectedUser} />}
      </div>
    </div>
  );
};

export default MessagePage;
