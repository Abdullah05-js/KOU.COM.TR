import { SidebarR } from "../Right_sidebar/SidebarR";
import { SidebarL } from "../Left_sidebar/SidebarL";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const Controler = async () => {
      const data = localStorage.getItem("data");

      const User = JSON.parse(data);
      console.log(User);

      const response = await axios.post(
        "http://localhost:5000/api/users/find",
        { token: User.token }
      );
      console.log("fdvddfvdfv", response.data.trigger);
      if (response.data.trigger === false) navigate("/");
    };

    Controler();
  }, []);

  return (
    <div className="flex min-h-screen max-w-7xl mx-auto  bg-black p-0 m-0">
      <SidebarL />
      <Outlet />
      <SidebarR />
    </div>
  );
}

export default App;
