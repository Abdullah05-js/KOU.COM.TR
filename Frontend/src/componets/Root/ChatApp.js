
import { SidebarL } from '../Left_sidebar/SidebarL';
import { Outlet } from 'react-router-dom';
import { Room } from '../Chat/Room';
import { createContext} from 'react';

import io from "socket.io-client"

const socket = io("http://localhost:5000")

export  const socketProvider = createContext()


    const ChatApp = () => {
      
     
     
        return (
            <div className="flex min-h-screen max-w-7xl mx-auto  bg-black p-0 m-0" >
            <SidebarL/>
            <socketProvider.Provider  value={socket}>
            <Outlet/>
            </socketProvider.Provider>
            <Room  />
            </div>
        );
    }

export default ChatApp;
