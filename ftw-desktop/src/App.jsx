import { About } from './About';
import { useEffect, useState } from 'react'

import './App.css';
import { Contacte } from './Contacte ';
import { Routes, Route } from "react-router-dom";
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import Message from './Message/Message';
import { UserContext } from './userContext'
import { LoginRegister } from './auth/LoginRegister';
import CreateProfile from './Profile/CreateProfile/CreateProfile';
import { Profile } from './Profile/Profile';
import { MatchsList } from './Matches/MatchsList';
import { NotificationsList } from './Notification/NotificationsList';

function App() {

  let [authToken,setAuthToken] = useState("");
  let [id,setId]= useState("")
  useEffect (() =>{
    const token = localStorage.getItem("authToken");
    if (token){
      setAuthToken(token);
    }
  },[]);


  return (
    <>
        <UserContext.Provider value= {{authToken,setAuthToken,id,setId}}>
        
       
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
            <Route path="/createProfile" element={<CreateProfile />} />
            
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
            
            <Route path="/message" element={
              <>
                <Menu />
                <Message />
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