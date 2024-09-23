import React from 'react'
import { Route,Routes } from 'react-router-dom'
import App from './componets/Root/App'
import { Login } from './componets/Login_page/Login';
import { Register } from './componets/register_page/Register';
import { Profile } from './componets/profile_page/Profile';
import MarketApp from './componets/Root/MarketApp'
import { Market } from './componets/Market/Market';
import Main from '/home/thodex/Desktop/website/Frontend/src/componets/Content_section/Main.js'
import { PostPage } from './componets/Content_section/PostPage';
import { EmailVerify } from './componets/Login_page/EmailVerify';
import { Chat } from './componets/Chat/Chat';
import ChatApp from './componets/Root/ChatApp';
export const RootRouter = () => {
  return (
    <>
    <Routes>

        <Route path="/home" element={<App/>}>
        <Route index element={<Main/>} />
        <Route path="Search" element={<Main/>} />
        <Route path="Messages" element={<Main/>} />
        <Route path="Profile" element={<Profile/>} />
        <Route path=":id" element={<Main/>} />

        </Route>


        <Route path="/chat" element={<ChatApp/>}>
        <Route index element={<Chat/>} />
        <Route path=":id" element={<Chat/>} />

        </Route>
        

        <Route path="/market" element={<MarketApp/>}>
        <Route index element={<Market/>}/>
        <Route path="Search" element={<Main/>} />
        <Route path="Messages" element={<Main/>} />
        <Route path="Profile" element={<Profile/>} />
        <Route path="Market" element={<Main/>} />
        <Route path="Sell" element={<Main/>} />
        </Route>

   

        <Route path="verify" element={<EmailVerify/>} />
        <Route path="/" exact element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>


    </Routes>
    </>
  )
}
