import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
