import { useState, useEffect } from "react";
import SearchIcon from "../../assets/search.png";
import Notification from "../../assets/Notification.png";

interface User {
  id: string;
  name: string;
  image?: string;
  Time: string;
  Active?: boolean;
}

export default function MessageSidebar({
  onUserSelect,
}: {
  onUserSelect: (user: User) => void;
}) {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/src/data/Users.json");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="lg:max-w-[26.375rem] md:max-h-[40rem] h-full py-4 px-3 bg-white">
      <div className="relative my-4">
        <input
          type="text"
          placeholder="Search Name"
          className="border border-[#F5F5F7] w-full h-[3.25rem] rounded-[0.625rem] p-[0.875rem_3rem_0.875rem_1.75rem] placeholder:text-[#8E92BC] placeholder:font-[Plus Jakarta Sans] placeholder:font-normal placeholder:text-[0.9rem] placeholder:leading-[100%] placeholder:tracking-[-0.01em]"
        />
        <img
          src={SearchIcon}
          className="absolute right-6 top-1/2 h-[1.3rem] transform -translate-y-1/2"
          alt="Search"
        />
      </div>

      {/* User List */}
      <div className="md:max-h-[32rem] flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 overflow-x-hidden [&::-webkit-scrollbar]:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              setSelectedUserId(user.id);
              onUserSelect(user);
            }}
          >
            <div
              className={`items-center p-[0.625rem] px-[1rem] flex rounded-[0.625rem] gap-[0.625rem] hover:cursor-pointer 
              ${
                selectedUserId === user.id
                  ? "bg-[#FAFAFA]"
                  : "bg-[#FFFFFF] hover:bg-[#FAFAFA]"
              }`}
            >
              <img
                src={user.image}
                alt="Not Found"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-3 flex-grow">
                <div className="flex justify-between items-center">
                  <h1 className="text-[#141522] font-[600] text-[0.875rem] leading-[1.5] tracking-[-0.02em] align-middle font-[Plus Jakarta Sans]">
                    {user.name}
                  </h1>
                  <p className="text-[#8E92BC] font-[400] text-[0.75rem] leading-[1] tracking-[-0.01em] text-right align-middle w-[2.875rem] h-[1.25rem]">
                    {user?.Time}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h1></h1>
                  <img src={Notification} alt="not found" />
                </div>
              </div>
            </div>
            <hr className="w-full border border-[#F5F5F7] my-4 rotate-180" />
          </div>
        ))}
      </div>
    </div>
  );
}
