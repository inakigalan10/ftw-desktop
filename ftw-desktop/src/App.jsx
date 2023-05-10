import { About } from './About';
import { useState } from 'react'

import './App.css';
import { Contacte } from './Contacte ';
import LandingPage from './landingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import Register from './auth/Register';
import { Login } from './auth/Login';
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import Profile from './Profile/Profile';
import Matches from './Matches/Matches';
import Notification from './Notification/Notification';
import Message from './Message/Message';
import ProfileFotos from './Profile/ProfileFotos';
import { UserContext } from './userContext'

function App() {

  let [authToken,setAuthToken] = useState("");

  return (
    <>
        <UserContext.Provider value= {{authToken,setAuthToken}}>
        
        <Routes>
        {authToken ? (
          <>
            <Route path="/" element={
              <>
                <Menu />
                <Matching />
              </>
            } />
            
            <Route path="/about" element={<About />} />
            
            <Route path="/contacte" element={<Contacte />} />
            
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
            
          </>
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            
            <Route path="/" element={<Login />} />
            
            <Route path="/welcome" element={<LandingPage />} />
          </>
        )}
      </Routes>

      </UserContext.Provider>

    </>
  )
}

export default App;
