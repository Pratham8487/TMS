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
  const [isLoading, setIsLoading] = useState(false);

  const handleUserSelect = (user: User) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedUser(user);
      setIsLoading(false);
    }, 50);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar - Hidden on md when chat is open, always visible on lg */}
      <div
        className={`w-full md:w-1/3 bg-white transition-opacity duration-500 border border-gray-100 ${
          selectedUser ? "hidden md:block lg:block" : "block"
        }`}
      >
        <MessageSidebar onUserSelect={handleUserSelect} />
      </div>

      {/* ChatBox - Takes full width on md but keeps sidebar on lg */}
      <div
        className={`w-full md:w-2/3 transition-opacity duration-500 overflow-y-hidden max-h-[40rem] ${
          selectedUser && !isLoading ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        {selectedUser && !isLoading && (
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
