import { SidebarR } from "../Right_sidebar/SidebarR";
import { SidebarL } from "../Left_sidebar/SidebarL";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto  bg-black p-0 m-0">
      <SidebarL />
      <Outlet />
      <SidebarR />
    </div>
  );
}

export default App;
