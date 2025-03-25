import { useState, useEffect } from "react";
import SearchIcon from "../../assets/search.png";
import Notification from "../../assets/Notification.png";

export default function MessageSidebar() {
  const [users, setUsers] = useState<
    {
      [x: string]: string | undefined;
      Time: string;
      id: string;
      name: string;
    }[]
  >([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/src/data/Users.json"); // Fetch JSON file
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="max-w-[26.375rem] max-h-[40rem] h-full py-4 px-1 bg-white">
      <div className="relative my-4 ">
        <input
          type="text"
          placeholder="Search Name"
          className="min-w-92 p-2 pl-6 pr-12 text-[#8E92BC] rounded-xl outline-none shadow-xs focus:ring-2 focus:ring-indigo-500"
        />
        <img
          src={SearchIcon}
          className="absolute right-8 top-1/2 h-[1.3rem] transform -translate-y-1/2 text-gray-500 text-xl"
          alt="not found"
        />
      </div>
      <div className="w-full px-1 max-h-[32rem] pt-5 overflow-y-auto overflow-x-hidden">
        {users.map((user) => (
          <div key={user.id}>
            <div className="items-center w-[22rem] h-[3.5rem] hover:bg-[#FAFAFA] bg-[#FFFFFF] p-[0.625rem] px-[1.25rem] flex rounded-[0.625rem] gap-[0.625rem] hover:cursor-pointer">
              <img
                src={user.image}
                alt="Not Found"
                className="w-14 h-12 rounded-full object-cover"
              />
              <div className="w-full space-y-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-[#141522] font-[600] text-[0.875rem] leading-[1.5] tracking-[-0.02em] align-middle font-[Plus Jakarta Sans]">
                    {user.name}
                  </h1>
                  <p className="text-[#8E92BC] font-[400] text-[0.75rem] leading-[1] tracking-[-0.01em] text-right align-middle w-[2.875rem] h-[1.25rem]">
                    {user?.Time}
                  </p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h1></h1>
                  <img src={Notification} alt="not found" />
                </div>
              </div>
            </div>
            <hr className="w-[22rem] border border-[#F5F5F7] my-4 rotate-180" />
          </div>
        ))}
      </div>
    </div>
  );
}
