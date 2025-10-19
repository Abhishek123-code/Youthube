import { Outlet } from "react-router-dom";
import Maincontainer from "./MainContainer.jsx";
import Sidebar from "./Sidebar.jsx";

const Body = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default Body;
