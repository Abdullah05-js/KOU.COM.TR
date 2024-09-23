
import { SidebarL } from '../Left_sidebar/SidebarL';
import { Outlet } from 'react-router-dom';
import { Room } from '../Chat/Room';
    const ChatApp = () => {


        return (
            <div className="flex min-h-screen max-w-7xl mx-auto  bg-black p-0 m-0" >
            <SidebarL/>
            <Outlet/>
            <Room/>
            </div>
        );
    }

export default ChatApp;
