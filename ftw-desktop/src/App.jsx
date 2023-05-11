import { About } from './About';
import { useState } from 'react'

import './App.css';
import { Contacte } from './Contacte ';
import { Routes, Route } from "react-router-dom";
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import Profile from './Profile/Profile';
import Matches from './Matches/Matches';
import Notification from './Notification/Notification';
import Message from './Message/Message';
import ProfileFotos from './Profile/ProfileFotos';
import { UserContext } from './userContext'
import { LoginRegister } from './auth/LoginRegister';
import CreateProfile from './Profile/CreateProfile/CreateProfile';

function App() {

  let [authToken,setAuthToken] = useState("");
  let authTokenA =  JSON.parse(localStorage.getItem("authToken")) || "" 


  return (
    <>
        <UserContext.Provider value= {{authToken,setAuthToken}}>
        
       
        {authToken != "" || authTokenA != "" ? (
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
            
            <Route path="/profile" element={
              <>
                <Menu />
                <Profile />
              </>
            } />
            
            <Route path="/profileFotos" element={
              <>
                <Menu />
                <Profile />
                <ProfileFotos />
              </>
            } />
            
            <Route path="/matches" element={
              <>
                <Menu />
                <Matches />
              </>
            } />
            
            <Route path="/notification" element={
              <>
                <Menu />
                <Notification />
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