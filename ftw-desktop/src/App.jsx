import { About } from './About';
import { useEffect, useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import './App.css';
import { Contacte } from './Contacte ';
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import { UserContext } from './userContext'
import { LoginRegister } from './auth/LoginRegister';
import { Profile } from './Profile/Profile';
import { MatchsList } from './Matches/MatchsList';
import  ChatsList  from './chat/ChatsList';

import CreateProfile  from './Profile/CreateProfile/CreateProfile';

import Chat from './chat/Chat';
import ProfileUpdate from './Profile/ProfileUpdate';
import useSocket from './hooks/useSocket';
import useSocketNotis from './hooks/useSocketNotis';
import { ChatProvider } from './ChatContext';



function App() {

  let [authToken,setAuthToken] = useState("");
  let [idUser,setIdUser]= useState("");
  let [usernameUser,setUsernameUser]= useState("")
  let [idProfile, setIdProfile]= useState("")
  let [readChat, setReadChat]= useState("")
  let [ListChat, setListChat]= useState("")
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }

    const username = localStorage.getItem('username');
    if (username) {
      setUsernameUser(username);
    }

    const id = localStorage.getItem('idUsername');
    if (id) {
      setIdUser(id);
    }

    const idProfile = localStorage.getItem('idProfile');
    if (idProfile) {
      setIdProfile(idProfile);
    }

    const listchat = localStorage.getItem('chatList');
    if (listchat) {
      setListChat(listchat);
    }
  }, []);

 

  return (
    <>
        <UserContext.Provider value= {{authToken,setAuthToken,idUser,setIdUser,usernameUser,setUsernameUser, idProfile, setIdProfile, readChat, setReadChat, ListChat, setListChat}}>
        
       
        {authToken ? (
          <>
           <Routes>
            <Route path="/" element={
              <>
                <ChatProvider>
                  <Menu />
                  <Matching />
                </ChatProvider>
              </>
            } />
            
            <Route path="/about" element={<About />} />
            
            <Route path="/contacte" element={<Contacte />} />
            
            
            <Route path="/profile/:id" element={
              <>
              <ChatProvider>
                <Menu />
                <Profile/>
              </ChatProvider>
              </>
            } />
            <Route path="/profile/edit/:id" element={
              <>
                <ChatProvider>
                  <Menu />
                  <ProfileUpdate/>
                </ChatProvider>
              </>
            } />
            
            
            <Route path="/matches" element={
              <>
                <ChatProvider>
                  <Menu />
                  <MatchsList />
                </ChatProvider>
              </>
            } />
            
            
            <Route path="/chatList" element={
              <>
                <ChatProvider>
                  <Menu />
                  <ChatsList />
                </ChatProvider>
              </>
            } />
            <Route path="/chat/:id" element={
              <>
               <ChatProvider>
                  <Menu />
                  <Chat />
                </ChatProvider>
              </>
            } />

            <Route path="/createProfile" element={
              <>
               
                <CreateProfile />
              </>
            } />
            </Routes>



           
          </>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider>

    </>
  )
}

export default App;