import { About } from './About';
import { useEffect, useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import './App.css';
import { Contacte } from './Contacte ';
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import { UserContext } from './userContext'
import { LoginRegister } from './auth/LoginRegister';
import CreateProfile from './Profile/CreateProfile/CreateProfile';
import { Profile } from './Profile/Profile';
import { MatchsList } from './Matches/MatchsList';
import { NotificationsList } from './Notification/NotificationsList';
import MessagesList from './chat/Message/MessagesList';
import {ChatsList} from './chat/ChatsList';

function App() {

  let [authToken,setAuthToken] = useState("");
  let [idUser,setIdUser]= useState("");
  let [usernameUser,setUsernameUser]= useState("");
  let [idProfile,setIdProfile]= useState("");
  const [sessionCookie, setSessionCookie] = useState('');

  useEffect (() =>{
    const token = localStorage.getItem("authToken");
    if (token){
      setAuthToken(token);
    }
  },[]);

  console.log(idProfile);

  return (
    <>
        <UserContext.Provider value= {{authToken,setAuthToken}}>
        
       
        {authToken ? (
          <>
           <Routes>
            <Route path="/" element={
              <>
                <Menu />
                <Matching />
              </>
            } />
            
            <Route path="/about" element={<About />} />
            
            <Route path="/contacte" element={<Contacte />} />
            
            
            <Route path="/profile/:id" element={
              <>
                <Menu />
                <Profile/>
              </>
            } />
            
            
            <Route path="/matches" element={
              <>
                <Menu />
                <MatchsList />
              </>
            } />
            
            <Route path="/notification" element={
              <>
                <Menu />
                <NotificationsList />
              </>
            } />
            
            <Route path="/chat/:id" element={
              <>
                <Menu/>
                <MessagesList/>

                
              </>
            } />

            <Route path="/messages" element={
              <>
                <Menu/>
                <ChatsList/>               
              </>
            } />
            
            </Routes>
            {idProfile === null ? (
              <Navigate to="/createProfile" />
            ) : (
              <Navigate to="/" />
            )}
          </>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider>

    </>
  )
}

export default App;