import { About } from './About';
import { useEffect, useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import './App.css';
import { Contacte } from './Contacte ';
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import { UserContext } from './userContext'
import { LoginRegister } from './auth/LoginRegister';
import {ProfileUpdate} from './Profile/ProfileUpdate';
import { Profile } from './Profile/Profile';
import { MatchsList } from './Matches/MatchsList';
import Chat from './chat/Chat';



function App() {

  let [authToken,setAuthToken] = useState("");
  let [idUser,setIdUser]= useState("");
  let [username,setUsername]= useState("")
  
  useEffect (() =>{
    const token = localStorage.getItem("authToken");
    if (token){
      setAuthToken(token);
    }

    const username = localStorage.getItem("username");
    if (username){
      setUsername(username);
    }

    const id = localStorage.getItem("idUsername");
    if (id){
      setIdUser(id);
    }
  },[]);



  return (
    <>
        <UserContext.Provider value= {{authToken,setAuthToken,idUser,setIdUser,username,setUsername}}>
        
       
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
            <Route path="/profile/edit/:id" element={
              <>
                <Menu />
                <ProfileUpdate/>
              </>
            } />
            
            
            <Route path="/matches" element={
              <>
                <Menu />
                <MatchsList />
              </>
            } />
            
            
            
            <Route path="/chat/:id" element={
              <>
                <Menu />
                <Chat />
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