import MessageSidebar from "../Components/dynamic/MessageSidebar";
import ChatBox from "../Components/dynamic/ChatBox";

const MessagePage = () => {
  return (
    <div className="grid grid-cols-3 gap-0 overflow-hidden"> {/* Removed the gap */}
      <div className="col-span-1 bg-white ">
        <MessageSidebar />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <ChatBox />
      </div>
    </div>
  );
};

export default MessagePage;
