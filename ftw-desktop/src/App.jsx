import { About } from './About';
import { useEffect, useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import './App.css';
import { Contacte } from './Contacte ';
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import MessagesList from '../src/Message/MessagesList'
import { UserContext } from './userContext'
import { LoginRegister } from './auth/LoginRegister';
import CreateProfile from './Profile/CreateProfile/CreateProfile';
import { Profile } from './Profile/Profile';
import { MatchsList } from './Matches/MatchsList';
import { NotificationsList } from './Notification/NotificationsList';

function App() {

  let [authToken,setAuthToken] = useState("");
  let [id,setId]= useState("");
  let [username,setUsername]= useState("")
  useEffect (() =>{
    const token = localStorage.getItem("authToken");
    if (token){
      setAuthToken(token);
    }
  },[]);



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
            
            <Route path="/message" element={
              <>
                <Menu />
                <MessagesList />
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